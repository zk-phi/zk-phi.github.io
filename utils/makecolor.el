(mapcar (lambda (hsl) (apply 'color-rgb-to-hex (apply 'color-hsl-to-rgb hsl)))
        '((0.00 0.00 0.30) (0.00 0.00 1.00)
          (0.68 1.00 0.75) (0.83 1.00 0.75)
          (0.68 1.00 0.65)
          (0.53 1.00 0.95) (0.68 1.00 0.95)))

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
