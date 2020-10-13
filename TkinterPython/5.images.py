from tkinter import *
from PIL import ImageTk, Image

root = Tk()

# Title with favicon
root.title('Learning TKinter')
root.iconbitmap('assets/favicon.ico')

# show image
img = ImageTk.PhotoImage(Image.open('assets/laptop.jpg'))
label = Label(image=img)
label.pack()

# exit program
btn = Button(root, text='Exit Program', command=root.quit, bg='red')
btn.pack()

root.mainloop()