'''
Now you're ready to decode the image. The image is rendered by stacking the layers and aligning the pixels 
with the same positions in each layer. The digits indicate the color of the corresponding pixel: 
    0 is black, 1 is white, and 2 is transparent.

The layers are rendered with the first layer in front and the last layer in back. So, if a given position 
has a transparent pixel in the first and second layers, a black pixel in the third layer, and a white pixel 
in the fourth layer, the final image would have a black pixel at that position.

For example, given an image 2 pixels wide and 2 pixels tall, 
the image data 0222112222120000 corresponds to the following image layers:

Layer 1: 02
         22

Layer 2: 11
         22

Layer 3: 22
         12

Layer 4: 00
         00
Then, the full image can be found by determining the top visible pixel in each position:
The top-left pixel is black because the top layer is 0.
The top-right pixel is white because the top layer is 2 (transparent), but the second layer is 1.
The bottom-left pixel is white because the top two layers are 2, but the third layer is 1.
The bottom-right pixel is black because the only visible pixel in that position is 0 (from layer 4).
So, the final image looks like this:
01
10
What message is produced after decoding your image?
'''
import turtle

def decodeImage(pixels, l, c):
    message = ""
    layers = []
    i = 0
    layer = 1
    # while layer <= 100:
    while layer <= l:
        # pix = pixels[i:i+150]
        pix = pixels[i:i+c]
        layers.append(pix)
        # i+=150
        i+=c
        layer += 1
    # for i in range(150):
    for i in range(c):
        found = False
        for j in range(l):
            if layers[j][i] != '2'and found == False:
                 message += layers[j][i]
                 found = True
                #  break
        if found is False:
            message += '2'
    return message

f = open("input.txt", "r")
pixels = f.readline()
message = decodeImage(pixels, 100, 150)
print(f"message: {message}")
answer = ""
for i in range(len(message)):
    if i % 25 == 0:
        answer += '\n'
    if message[i] == '0':
        answer += " "
    elif message[i] == '1':
        answer += "+"
print(answer)
