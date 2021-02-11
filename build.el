#!/usr/bin/emacs --script

(defconst timestamp (format-time-string "%Y/%m/%d"))

(setq default-directory (or (getenv "GIT_ROOT") default-directory))

(dolist (file '("index.html" "index_en.html"))
  (with-temp-buffer
    (insert-file-contents file)
    (search-forward-regexp "<span id=\"lastUpdated\">\\([^<]*\\)</span>")
    (replace-match timestamp t t nil 1)
    (write-file file)))
