from tkinter import *

root = Tk()

# frame widget
frame = LabelFrame(root, text='This is a frame', padx=50, pady=50)
frame.pack(padx=10, pady=10)

# button widget
btn = Button(frame, text='Click here!')
btn.pack()

root.mainloop()