'''
Now, you just need to figure out how many orbital transfers you (YOU) need to take to get to Santa (SAN).

You start at the object YOU are orbiting; your destination is the object SAN is orbiting. 
An orbital transfer lets you move from any object to an object orbiting or orbited by that object.

For example, suppose you have the following map:

COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L
K)YOU
I)SAN
Visually, the above map of orbits looks like this:

                          YOU
                         /
        G - H       J - K - L
       /           /
COM - B - C - D - E - F
               \
                I - SAN
In this example, YOU are in orbit around K, and SAN is in orbit around I. 
To move from K to I, a minimum of 4 orbital transfers are required:

K to J
J to E
E to D
D to I
Afterward, the map of orbits looks like this:

        G - H       J - K - L
       /           /
COM - B - C - D - E - F
               \
                I - SAN
                 \
                  YOU
What is the minimum number of orbital transfers required to move from the object 
YOU are orbiting to the object SAN is orbiting? (Between the objects they are orbiting - not between YOU and SAN.)
'''

class Queue():
    def __init__(self):
        self.queue = []
    def enqueue(self, value):
        self.queue.append(value)
    def dequeue(self):
        if self.size() > 0:
            return self.queue.pop(0)
        else:
            return None
    def size(self):
        return len(self.queue)

def createOrbits():
    # build a dict, where the keys are the objects, and the values are the objects they orbit
    # Find all paths from each object to COM
    # Add the length of each path to get total orbits
    orbits = {}
    orbits['COM'] = [None]
    f = open("input.txt", "r")
    info = f.readline().split('\n')[0]
    while info:
        [obj1, obj2] = info.split(')')
        if obj1 not in orbits:
            orbits[obj1] = [obj2]
        else:
            orbits[obj1].append(obj2)
        if obj2 not in orbits:
            orbits[obj2] = [obj1]
        else:
            orbits[obj2].append(obj1)
        info = f.readline().split('\n')[0]
    # print(f'orbits: {orbits}')
    return orbits

def minTravel(orbits):
    # find shortest path from YOU's orbit to SAN's orbit 
    you_orbit = orbits['YOU'][0]
    san_orbit = orbits["SAN"][0]
    queue = Queue()
    visited = set()
    queue.enqueue([you_orbit])
    while queue.size() > 0:
        path = queue.dequeue()
        current_obj = path[-1]

        if current_obj == san_orbit:
            # print(f"path: {path}")
            return len(path)-1

        if current_obj is not None and current_obj not in visited:
            visited.add(current_obj)
            neighbors = orbits[current_obj]
            for neighbor in neighbors:
                current_path = path[:]
                current_path.append(neighbor)
                queue.enqueue(current_path)
    return 0

orbits = createOrbits()
print(f'num of transfers: {minTravel(orbits)}')