'''
The Elves' spirits are lifted when they realize you have an opportunity to reboot one of their Mars rovers, 
and so they are curious if you would spend a brief sojourn on Mars. You land your ship near the rover.

When you reach the rover, you discover that it's already in the process of rebooting! It's just waiting for 
someone to enter a BIOS password. The Elf responsible for the rover takes a picture of the password (your puzzle input) 
and sends it to you via the Digital Sending Network.

Unfortunately, images sent via the Digital Sending Network aren't encoded with any normal encoding; instead, 
they're encoded in a special Space Image Format. None of the Elves seem to remember why this is the case. 
They send you the instructions to decode it.

Images are sent as a series of digits that each represent the color of a single pixel. The digits fill each row 
of the image left-to-right, then move downward to the next row, filling rows top-to-bottom until every pixel of 
the image is filled.

Each image actually consists of a series of identically-sized layers that are filled in this way. 
So, the first digit corresponds to the top-left pixel of the first layer, the second digit corresponds 
to the pixel to the right of that on the same layer, and so on until the last digit, which corresponds 
to the bottom-right pixel of the last layer.

For example, given an image 3 pixels wide and 2 pixels tall, the image data 123456789012 corresponds 
to the following image layers:

Layer 1: 123
         456

Layer 2: 789
         012
The image you received is 25 pixels wide and 6 pixels tall.

To make sure the image wasn't corrupted during transmission, 
the Elves would like you to find the layer that contains the fewest 0 digits. 
On that layer, what is the number of 1 digits multiplied by the number of 2 digits?
'''

# def buildImage(pixels, wide, tall):
#     image = []
#     columns = wide
#     row = 0
#     next_index = 0
#     while next_index + columns - 1 < len(pixels):
#         image.append([])
#         for i in range(next_index, next_index + columns):
#             image[row].append(pixels[i])
#         row += 1
#         next_index = row*columns
#     return image

# pixels = '123456789012'
# print(pixels)
f = open("input.txt", "r")
pixels = f.readline()
i = 0
layer = 1
min_0s = None
count_1 = None
count_2 = None
min_layer = 0
while layer <=100:
    pix = pixels[i:i+150]
    count_0 = pix.count('0')
    if min_0s is None or count_0 < min_0s:
        min_0s = count_0
        min_layer = layer
        count_1 = pix.count('1')
        count_2 = pix.count('2')
    layer += 1
    i += 150
print(f'min 0s: {min_0s}, layer: {min_layer}')
print(f'1: {count_1}, 2: {count_2}, answer: {count_1*count_2}')
