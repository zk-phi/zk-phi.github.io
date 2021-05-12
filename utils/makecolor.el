(mapcar (lambda (hsl)
          (if (symbolp hsl) hsl
            (cl-destructuring-bind (h s l &optional a) hsl
              (cl-destructuring-bind (r g b) (color-hsl-to-rgb h s l)
                (if a
                    (format "rgba(%d, %d, %d, %.1f)"
                            (floor (* r 255)) (floor (* g 255)) (floor (* b 255)) a)
                  (color-rgb-to-hex r g b 2))))))
        '(:bg (0.68 0.70 0.25) (0.83 0.70 0.25) :fg (0.68 0.70 0.95)
              :acc (0.68 1.00 0.65) (0.83 1.00 0.65) (0.83 0.90 0.70) (0.93 1.00 0.65)
              :grad (0.68 1.00 0.65 0.6) (0.83 1.00 0.65 0.6)))

;; (let (lst)
;;   (dotimes (n 40)
;;     (push (cons (+ 0.5 (/ n 100.0))
;;                 (apply 'color-rgb-to-hex
;;                        (color-hsl-to-rgb (+ 0.5 (/ n 100.0)) 1 0.77)))
;;           lst))
;;   lst)


;; (defconst blendcolor (color-name-to-rgb "#822"))
;; (defconst blendamount 0.2)
;;
;; (defun blend (color)
;;   (cl-destructuring-bind (r g b) (color-name-to-rgb color)
;;     (cl-destructuring-bind (r1 g1 b1) blendcolor
;;       (color-rgb-to-hex (+ (* r (- 1 blendamount)) (* r1 blendamount))
;;                         (+ (* g (- 1 blendamount)) (* g1 blendamount))
;;                         (+ (* b (- 1 blendamount)) (* b1 blendamount))))))
;;
;; (mapcar 'blend '("#444444"
;;                  "#ffffff"
;;                  "#8888ff"
;;                  "#ff88ff"
;;                  "#5555ff"
;;                  "#eeffff"
;;                  "#eeeeff"))
