/*
Authour: Nguyen Cat Nguyen
KUID: 3077463
Date: Monday Sep 19, 2022
*/



//Create a group class
class Group {
    //Create constructor
    constructor() {
        this.group = [];
        //Create empty group
    }
    //Create add method, only add value if it isn't already a member.
    add(value) {
        if(!this.has(value)) {
            this.group.push(value);
        }
    }
    //Create delete method, remove value from group if it was a member.
    delete(value) {
        if(this.has(value)) {
            //Check if value is in group
            this.group.splice(this.group.indexOf(value), 1);
            //Remove value from group
        }
        }

    //Create has method, return true if value in group, false if not.
    has(value) {
        if(this.group.includes(value)) {
            //Check if value is in group
            return true;
        } else {
            return false;
        } 
    }
    //Create intersection method, check if value in this group is in another group. Then return the common of the two groups in a new group.
    intersection(value) {
        let newGroup = new Group();
        //Create new group
        for(let i = 0; i < this.group.length; i++) {
            if(value.has(this.group[i])) {
                newGroup.add(this.group[i]);
                //Add value to new group
            }
        }
        return newGroup;
        //return new group
    }
    //Create union method, check if value in this group is in another group. Then return the union of the two groups in a new group.
    union(value) {
        let newGroup = new Group();
        //Create new group
        for(let i = 0; i < this.group.length; i++) {
            newGroup.add(this.group[i]);
            //Add value to new group
        }
        for(let i = 0; i < value.group.length; i++) {
            newGroup.add(value.group[i]);
            //Add value to new group
        }
        return newGroup;
    }
    //Create difference method, check if value in this group is in another group. Then return the difference of the two groups in a new group.
    difference(value) {
        let newGroup = new Group();
        //Create new group
        for(let i = 0; i < this.group.length; i++) {
            if(!value.has(this.group[i])) {
                newGroup.add(this.group[i]);
                //Add value to new group
            }
        }
        return newGroup;
    }

}
            



//Code test from assignment
let group1 = new Group();
let group2 = new Group();
group1.add(1);
group1.add(2);
group1.add(3);
//Add values to group1
console.log(group1);
group2.add(2);
group2.add(3);
group2.add(5);
group2.add(2);
//Add values to group2
console.log(group2);

console.log(group1.has(5));
console.log(group2.has(3));
//Check if value is in group
console.log(group1.union(group2));
//Check union of group1 and group2
console.log(group1.intersection(group2));
//Check intersection of group1 and group2
console.log(group1.difference(group2));
//Check difference of group1 and group2
group1.delete(1);
//Remove value from group1
console.log(group1);
//Print group1 values after removing value.
group2.delete(1);
console.log(group2);
//Print group2 values after removing value.