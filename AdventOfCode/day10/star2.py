'''
Once you give them the coordinates, the Elves quickly deploy an Instant Monitoring Station to the location 
and discover the worst: there are simply too many asteroids.

The only solution is complete vaporization by giant laser.

Fortunately, in addition to an asteroid scanner, the new monitoring station also comes equipped with a 
giant rotating laser perfect for vaporizing asteroids. The laser starts by pointing up and always rotates 
clockwise, vaporizing any asteroid it hits.

If multiple asteroids are exactly in line with the station, the laser only has enough power to vaporize 
one of them before continuing its rotation. In other words, the same asteroids that can be detected can 
be vaporized, but if vaporizing one asteroid makes another one detectable, the newly-detected asteroid 
won't be vaporized until the laser has returned to the same position by rotating a full 360 degrees.

For example, consider the following map, where the asteroid with the new monitoring station 
(and laser) is marked X:

.#....#####...#..
##...##.#####..##
##...#...#.#####.
..#.....X...###..
..#.#.....#....##

The first nine asteroids to get vaporized, in order, would be:
.#....###24...#..
##...##.13#67..9#
##...#...5.8####.
..#.....X...###..
..#.#.....#....##
Note that some asteroids (the ones behind the asteroids marked 1, 5, and 7) 
won't have a chance to be vaporized until the next full rotation. 
The laser continues rotating; the next nine to be vaporized are:

.#....###.....#..
##...##...#.....#
##...#......1234.
..#.....X...5##..
..#.9.....8....76
The next nine to be vaporized are then:

.8....###.....#..
56...9#...#.....#
34...7...........
..2.....X....##..
..1..............
Finally, the laser completes its first full rotation (1 through 3), 
a second rotation (4 through 8), and vaporizes the last asteroid (9) 
partway through its third rotation:

......234.....6..
......1...5.....7
.................
........X....89..
.................
In the large example above (the one with the best monitoring station location at 11,13):

The 1st asteroid to be vaporized is at 11,12.
The 2nd asteroid to be vaporized is at 12,1.
The 3rd asteroid to be vaporized is at 12,2.
The 10th asteroid to be vaporized is at 12,8.
The 20th asteroid to be vaporized is at 16,0.
The 50th asteroid to be vaporized is at 16,9.
The 100th asteroid to be vaporized is at 10,16.
The 199th asteroid to be vaporized is at 9,6.
The 200th asteroid to be vaporized is at 8,2.
The 201st asteroid to be vaporized is at 10,9.
The 299th and final asteroid to be vaporized is at 11,1.
The Elves are placing bets on which will be the 200th asteroid to be vaporized. 
Win the bet by determining which asteroid that will be; what do you get if you multiply its 
X coordinate by 100 and then add its Y coordinate? (For example, 8,2 becomes 802.)
'''
import math 

def destroy_astr(start, end, thetas, astr_map, count, up):

    # print(f'start: {start}, end: {end}')
    removed = set()
    thetas_ordered = []
    thetas_keys = list(thetas.keys())
    # print(f"thetas keys: {thetas_keys}")
    thetas_keys.sort()
    # print(f"thetas keys: {thetas_keys}")
    reverse = False
    if start > end:
        # print("here")
        # temp = start
        # start = end
        # end = temp
        # # reverse keys
        # thetas_keys.reverse()
        # reverse = True
        start = -start

    for theta in thetas_keys:
        # if reverse == False:
        if theta >= start and theta <= end:
            if theta not in removed:
                thetas_ordered.append(theta)
                removed.add(theta)
        # else:
        #     if theta > start and theta <= end:
        #         if theta not in removed:
        #             thetas_ordered.append(theta)
        #             removed.add(theta)
    # thetas_ordered.sort()
    for theta in thetas_ordered:
        if theta == 0.0:
            remove = thetas[theta].pop(0)
        else:
            #     remove = thetas[theta].pop()
            if up == 1:
                remove = thetas[theta].pop()
            elif up == 0:
                remove = thetas[theta].pop(0)
        count += 1
        print(f"asteroid {count}: removed: {remove}, theta: {theta}")
        if thetas[theta] == []:
            del thetas[theta]
    
    return count

def destroy(location, astr_map, count):
    #  build a dict for all the thetas to all the astroids
    # go through the dict, removing astroids while turning
    thetas = {}
    astr_x = location[0]
    astr_y = location[1]
    count_astr = 0
    for x in range(len(astr_map)):
        for y in range(len(astr_map[x])):
            if  astr_map[x][y] == '#':
                count_astr += 1
                theta = math.atan2(x-astr_x, y-astr_y)
                if theta not in thetas:
                    thetas[theta] = [(x, y)]
                else:
                    thetas[theta].append((x, y))
    # print(thetas)
    # while count < count_astr:
    while thetas != {}:
        start = math.atan2(0-astr_x, 0)
        end = math.atan2(0-astr_x, len(astr_map[0])-astr_y-1)
        count = destroy_astr(start, end, thetas, astr_map, count, 1)
        # print(f"1 count: {count}")

        start = end+0.0000001
        end = math.atan2(0, len(astr_map[0])-astr_y-1)
        count = destroy_astr(start, end, thetas, astr_map, count, 1)
        # print(f"2 count: {count}")

        start = end+0.0000001
        end = math.atan2(len(astr_map)-astr_x-1, len(astr_map[0])-astr_y-1)
        count = destroy_astr(start, end, thetas, astr_map, count, 0)
        # print(f"3 count: {count}")

        start = end+0.0000001
        end = math.atan2(len(astr_map)-astr_x-1, 0)
        count = destroy_astr(start, end, thetas, astr_map, count, 0)
        # print(f"4 count: {count}")

        start = end+0.0000001
        end = math.atan2(len(astr_map)-astr_x-1, 0-astr_y)
        count = destroy_astr(start, end, thetas, astr_map, count, 0)
        # print(f"5 count: {count}")

        start = end+0.0000001
        end = math.atan2(0, 0-astr_y)
        count = destroy_astr(start, end, thetas, astr_map, count, 0)
        # print(f"6 count: {count}")

        start = end+0.0000001
        end = math.atan2(0-astr_x, 0-astr_y)
        count = destroy_astr(start, end, thetas, astr_map, count, 1)
        # print(f"7 count: {count}")

        start = end+0.0000001
        end = math.atan2(0-astr_x, 0)-0.0000001
        count = destroy_astr(start, end, thetas, astr_map, count, 1)
        # print(f"8 count: {count}")

        # print(thetas)


def findAstr200():
    astr_map = []
    f = open("input.txt", "r")
    input1 = f.readline()
    while input1 != "":
        astr_map.append(list(input1.strip('\n')))
        input1 = f.readline()
    count = 0
    astroids = destroy((20, 31), astr_map, count)  # returns (17, 5) -> answer = 5*100 + 17 = 517
    # astroids = destroy((3, 8), astr_map, count)
    return astroids

print(findAstr200())