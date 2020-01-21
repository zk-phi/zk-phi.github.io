(require 'color)
(require 'cl-lib)

(defconst num-stars 1000)

(dotimes (n num-stars)
  (insert
   (format "%.2fvw %.2fvh 0px %.2fpx silver,\n"
           (- (/ (random 10000) 100.0) 50)
           (- (/ (random 10000) 100.0) 50)
           (/ (random 10) 10.0)
           )))
