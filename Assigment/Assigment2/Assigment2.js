/*



The standard JavaScript environment provides another data structure called Set.
• A set holds a collection of values (from Set Theory – EECS 210, see Sets & Set
Operations.pptx for a review).
• A value can be part of a set only once—adding it again doesn’t have any effect.
• Write a class called Group (since Set is already taken).
• Group should have 6 methods: add, delete, has, union, intersect, and difference.
• Its constructor creates an empty group.
• add adds a value to the group (but only if it isn’t already a member)
• delete removes its argument from the group (if it was a member)
• has returns a Boolean value indicating whether its argument is a member of the
group
• union returns the union of the group and the argument, which should be another
group: this ∪ argument
• intersection returns the intersection of the group and the argument, which should
be another group: this ∩ argument
• difference returns the difference of the group and the argument, which should be
another group: this - argument
• Test your Group class with the following code:
let group1 = new Group();
let group2 = new Group();
group1.add(1);
group1.add(2);
group1.add(3);
console.log(group1);
group2.add(2);
group2.add(3);
group2.add(5);
group2.add(2);
console.log(group2);
console.log(group1.has(5));
console.log(group2.has(3));
console.log(group1.union(group2));
console.log(group1.intersection(group2));
console.log(group1.difference(group2));
group1.delete(1);
console.log(group1);
group2.delete(1);
console.log(group2);
• Provide comments that explain what each line of code is doing. You may
comment each line of code (using //) and/or provide a multi-line comment
(using /* and

*/



//Create a group class
class Group {
    //Create constructor
    constructor(value) {
        this.value = value;
        this.group = [];
        //Create empty group
    }
    //Create add method, only add if not already a member.
    add(value) {
        if(!this.has.value) {
            //Check if value is in group
            this.group.push(this.value);
            //Add value to group
        }
    }
    //Create delete method, remove argument from group if it was a member.
    delete(value) {
        if(this.value in this.group) {
            //Check if value is in group
            this.group.pop(this.value);
            //Remove value from group
        }
    } 
    //Create has method, return boolean value indicating if argument is a member of group.
    has(value) {
        if(this.value in this.group) {
            //Check if value is in group
            return true;
            //Return true if value is in group
        }
        else {
            return false;
            //Return false if value is not in group
        }
    }
    //Create intersection method, check if value in this group is in another group. Then return the common of the two groups in a new group.
    intersection(value) {
        let newGroup = new Group();
        //Create new group
        for(let i = 0; i < this.group.length; i++) {
            //Loop through group
            if(this.group[i] in value.group) {
                //Check if value in this group is in another group
                newGroup.add(this.group[i]);
                //Add value to new group
            }
        }
        return newGroup;
        //Return new group
    }
}


let group1 = new Group();
group1.add(1);
group1.add(2);
console.log(group1);
