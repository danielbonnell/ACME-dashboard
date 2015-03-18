class HomesController < ApplicationController
  def index
    gon.red = [7.0, 6.9, 9.5, 8.5, 6.2, 8.5, 4.2]
    gon.green = [0.9, 0.6, 3.5, 3.4, 4.5, 6.0, 5.6]
    gon.blue = [0.2, 0.8, 5.7, 7.3, 4.0, 2.0, 1.8]
    gon.results1 = [
      ["Strongly Agree", 15],
      ["Somewhat Agrree", 32],
      ["Somewhat Disagree", 18],
      ["Strongly Disagree", 35]
    ]
    gon.results2 = [
      ["Strongly Agree", 48],
      ["Somewhat Agrree", 27],
      ["Somewhat Disagree", 21],
      ["Strongly Disagree", 4]
    ]
  end
end
