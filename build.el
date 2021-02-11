#!/usr/bin/emacs --script

(defconst timestamp (format-time-string "%Y/%m/%d"))

(setq default-directory (or (getenv "GIT_ROOT") default-directory))

(dolist (file '("index.html" "index_en.html" "etc.html"))
  (with-temp-buffer
    (insert-file-contents file)
    ;; embed lastUpdated date
    (save-excursion
      (when (search-forward-regexp "<span id=\"lastUpdated\">\\([^<]*\\)</span>" nil t)
        (replace-match timestamp t t nil 1)))
    ;; inline core CSSs
    (save-excursion
      (while (search-forward-regexp
              "<link rel=\"stylesheet\" href=\"\\([^\"]+\\)\" type=\"text/css\">" nil t)
        (let* ((filename (match-string 1))
               (minified-css (save-match-data
                               (with-temp-buffer
                                 (insert-file-contents filename)
                                 (save-excursion (replace-regexp "\n" ""))
                                 (save-excursion (replace-regexp " *\\([,:;{}+<]\\) *" "\\1"))
                                 (buffer-string)))))
          (replace-match (concat "<style>" minified-css "</style>") t t))))
    (write-file file)))
