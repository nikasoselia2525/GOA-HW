from turtle import *

#we want to paint a house

#step 1: draw a spuare

speed(10)
penup()
goto(-100,-100)
pendown()

width(7)
color("blue")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#end of spuare

#drawing windows
penup()
goto(-75,-25)
pendown()
color("yellow")
begin_fill()
forward(30)
left(90)

forward(30)
left(90)

forward(30)
left(90)

forward(30)
left(90)
end_fill()

penup()
goto(50,-25)
pendown()
color("yellow")
begin_fill()
forward(30)
left(90)

forward(30)
left(90)

forward(30)
left(90)

forward(30)
left(90)
end_fill()



color("blue")

penup()
goto(-100,-100)
pendown()



#drawing a door

forward(75)
left(90)

color("black")
begin_fill()
forward(100)
right(90)        #height of the door

forward(50)
right(90)

forward(100)
end_fill()
color("blue")

#drawing a roof
penup()
goto(100,100)
pendown()

color("green")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

exitonclick()
