from tkinter import *

root = Tk()

# rBtn = IntVar()
# rBtn.set('3')

# def clicked():
#     label = Label(root, text='Currently: ' + str(rBtn.get()))
#     label.pack()

# # radio button widget
# Radiobutton(root, text='Option 1', variable=rBtn, value=1).pack()
# Radiobutton(root, text='Option 2', variable=rBtn, value=2).pack()
# Radiobutton(root, text='Option 3', variable=rBtn, value=3).pack()
# Radiobutton(root, text='Option 4', variable=rBtn, value=4).pack()
# Radiobutton(root, text='Option 5', variable=rBtn, value=5).pack()

# Button(root, text='Click Me', command=clicked).pack()

CRUSTS = [
    ('Fresh Pan', 'Fresh Pan'),
    ('Cheese Burst', 'Cheese Burst'),
    ('New Hand Tossed', 'New Hand Tossed'),
    ('Classic Hand Tossed', 'Classic Hand Tossed'),
    ('Wheat Thin Crust', 'Wheat Thin Crust')
]

pizza = StringVar()
pizza.set('Cheese Burst')
selected_crust = StringVar()
selected_crust.set(pizza.get())

def on_crust_select():
    selected_crust.set(pizza.get())

for text, val in CRUSTS:
    Radiobutton(root, text=text, value=val, variable=pizza, command=on_crust_select).pack(anchor=W)

label = Label(root, textvariable=selected_crust, pady=30).pack()

root.mainloop()