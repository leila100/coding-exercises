'''
As you approach the rings of Saturn, your ship's low fuel indicator turns on. 
There isn't any fuel here, but the rings have plenty of raw material. 
Perhaps your ship's Inter-Stellar Refinery Union brand nanofactory can turn these raw materials into fuel.

You ask the nanofactory to produce a list of the reactions it can perform that are 
relevant to this process (your puzzle input). Every reaction turns some quantities 
of specific input chemicals into some quantity of an output chemical. 
Almost every chemical is produced by exactly one reaction; the only exception, ORE, 
is the raw material input to the entire process and is not produced by a reaction.

You just need to know how much ORE you'll need to collect before you can produce one unit of FUEL.

Each reaction gives specific quantities for its inputs and output; reactions cannot be partially run, 
so only whole integer multiples of these quantities can be used. (It's okay to have leftover chemicals 
when you're done, though.) For example, the reaction 1 A, 2 B, 3 C => 2 D means that exactly 2 units of 
chemical D can be produced by consuming exactly 1 A, 2 B and 3 C. You can run the full reaction as many 
times as necessary; for example, you could produce 10 D by consuming 5 A, 10 B, and 15 C.

Suppose your nanofactory produces the following list of reactions:

10 ORE => 10 A
1 ORE => 1 B
7 A, 1 B => 1 C
7 A, 1 C => 1 D
7 A, 1 D => 1 E
7 A, 1 E => 1 FUEL
The first two reactions use only ORE as inputs; they indicate that you can produce as much of chemical A as 
you want (in increments of 10 units, each 10 costing 10 ORE) and as much of chemical B as you want (each costing 1 ORE). 
To produce 1 FUEL, a total of 31 ORE is required: 1 ORE to produce 1 B, then 30 more ORE to produce the 7 + 7 + 7 + 7 = 28 A 
(with 2 extra A wasted) required in the reactions to convert the B into C, C into D, D into E, and finally E into FUEL. 
(30 A is produced because its reaction requires that it is created in increments of 10.)

Or, suppose you have the following list of reactions:

9 ORE => 2 A
8 ORE => 3 B
7 ORE => 5 C
3 A, 4 B => 1 AB
5 B, 7 C => 1 BC
4 C, 1 A => 1 CA
2 AB, 3 BC, 4 CA => 1 FUEL
The above list of reactions requires 165 ORE to produce 1 FUEL:

Consume 45 ORE to produce 10 A.
Consume 64 ORE to produce 24 B.
Consume 56 ORE to produce 40 C.
Consume 6 A, 8 B to produce 2 AB.
Consume 15 B, 21 C to produce 3 BC.
Consume 16 C, 4 A to produce 4 CA.
Consume 2 AB, 3 BC, 4 CA to produce 1 FUEL.
Here are some larger examples:

13312 ORE for 1 FUEL:

157 ORE => 5 NZVS
165 ORE => 6 DCFZ
44 XJWVT, 5 KHKGT, 1 QDVJ, 29 NZVS, 9 GPVTF, 48 HKGWZ => 1 FUEL
12 HKGWZ, 1 GPVTF, 8 PSHF => 9 QDVJ
179 ORE => 7 PSHF
177 ORE => 5 HKGWZ
7 DCFZ, 7 PSHF => 2 XJWVT
165 ORE => 2 GPVTF
3 DCFZ, 7 NZVS, 5 HKGWZ, 10 PSHF => 8 KHKGT
180697 ORE for 1 FUEL:

2 VPVL, 7 FWMGM, 2 CXFTF, 11 MNCFX => 1 STKFG
17 NVRVD, 3 JNWZP => 8 VPVL
53 STKFG, 6 MNCFX, 46 VJHF, 81 HVMC, 68 CXFTF, 25 GNMV => 1 FUEL
22 VJHF, 37 MNCFX => 5 FWMGM
139 ORE => 4 NVRVD
144 ORE => 7 JNWZP
5 MNCFX, 7 RFSQX, 2 FWMGM, 2 VPVL, 19 CXFTF => 3 HVMC
5 VJHF, 7 MNCFX, 9 VPVL, 37 CXFTF => 6 GNMV
145 ORE => 6 MNCFX
1 NVRVD => 8 CXFTF
1 VJHF, 6 MNCFX => 4 RFSQX
176 ORE => 6 VJHF
2210736 ORE for 1 FUEL:

171 ORE => 8 CNZTR
7 ZLQW, 3 BMBT, 9 XCVML, 26 XMNCP, 1 WPTQ, 2 MZWV, 1 RJRHP => 4 PLWSL
114 ORE => 4 BHXH
14 VRPVC => 6 BMBT
6 BHXH, 18 KTJDG, 12 WPTQ, 7 PLWSL, 31 FHTLT, 37 ZDVW => 1 FUEL
6 WPTQ, 2 BMBT, 8 ZLQW, 18 KTJDG, 1 XMNCP, 6 MZWV, 1 RJRHP => 6 FHTLT
15 XDBXC, 2 LTCX, 1 VRPVC => 6 ZLQW
13 WPTQ, 10 LTCX, 3 RJRHP, 14 XMNCP, 2 MZWV, 1 ZLQW => 1 ZDVW
5 BMBT => 4 WPTQ
189 ORE => 9 KTJDG
1 MZWV, 17 XDBXC, 3 XCVML => 2 XMNCP
12 VRPVC, 27 CNZTR => 2 XDBXC
15 KTJDG, 12 BHXH => 5 XCVML
3 BHXH, 2 VRPVC => 7 MZWV
121 ORE => 7 VRPVC
7 XCVML => 6 RJRHP
5 BHXH, 4 VRPVC => 5 LTCX
Given the list of reactions in your puzzle input, 
what is the minimum amount of ORE required to produce exactly 1 FUEL?
'''


def get_min_ORE():
    # build dict where keys are outputs and value are inputs of reaction
    reactions = {}
    f = open("input5.txt", "r")
    input1 = f.read()
    lines = input1.split("\n")
    for line in lines:
      [left, right] = line.split(" => ")
      [amount, chemical] = right.split(" ")
      inputs = left.split(", ")
      inputs = list(map(lambda x: x.split(" "), inputs))
      chems_inputs = {}
      for inp in inputs:
          chems_inputs[inp[1]] = inp[0]
      reactions[chemical] = {'amount': amount, 'inputs': chems_inputs}
    print(reactions)
    
    # build dict for conversions
    # keys are chemicals
    # vals are conversion to simple chems
    conversions = {}
    # print(f'keys in reactions: {list(reactions.keys())}')
    stack = []
    inputs = reactions['FUEL']['inputs']
    for inpt in inputs:
        stack.append((inpt, inputs[inpt]))
    result = {}
    extras = {}
    while len(stack) > 0:
        print(f"stack: {stack}")
        next_chem = stack.pop()
        chemical = next_chem[0]
        amount = int(next_chem[1])
        am = int(reactions[chemical]['amount'])
        print(f'amount: {amount}, am: {am}, extra: {extras}')
        inputs = reactions[chemical]['inputs']
        if 'ORE' in inputs:
            if chemical in result:
                result[chemical] += amount
            else:
                result[chemical] = amount
        else:
            if chemical in extras and extras[chemical] != 0:
                if extras[chemical] <= amount:
                    amount -= extras[chemical]
                    extras[chemical] = 0
                else:
                    amount = 0
                    extras[chemical] -= amount 
            if amount > am:
                if amount % am != 0:
                    if chemical in extras:
                        extras[chemical] += (((amount//am) + 1)*am) - amount
                    else:
                        extras[chemical] = (((amount//am) + 1)*am) - amount
            else:
                extras[chemical] = am - amount

            for inpt in inputs:
                if amount <= am:
                    stack.append([inpt, int(inputs[inpt])])
                else:
                    if amount % am == 0:
                        stack.append([inpt, (amount//am) * int(inputs[inpt])])
                    else:
                        stack.append([inpt, (amount//am + 1) * int(inputs[inpt])])
        print(f"result do far: {result}")

    print(f'result: {result}')
    total_ORE = 0
    for chemical in result:
        print(f'calculate for {chemical}')
        amount = int(reactions[chemical]['amount'])
        ORE_num = int(reactions[chemical]['inputs']['ORE'])
        print(f"amount: {amount}, ORE_num: {ORE_num}, {result[chemical]}")
        needed_amount = result[chemical]
        if needed_amount <= int(amount):
            total_ORE += ORE_num * result[chemical]
        else:
            if needed_amount % int(amount) == 0:
                div = result[chemical] // int(amount)
            else:
                div = result[chemical] // int(amount) + 1
            total_ORE += div * ORE_num
        print(f'total: {total_ORE}')
    return total_ORE
    
count = get_min_ORE()
print(f"result: {count}")