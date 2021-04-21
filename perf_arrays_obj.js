//Objects
let instructor = {
    firstname: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}

//when to use
    //when you don't need order
    //fast insertion/removal

    //Big O of Objects
        //insertion O(1)
        //removal O(1)
        //searching O(n)
        //access O (1)

//Arrays
    //Use when you need order

//Big O of Arrays
    //Insertion - depends
        //Methods: Push and pop faster O(1) than shift and unshift O (n)
        //Contact, slice and splice O(n)
        //sort O(n * log N)
        //for each/map/filter/reduce, etc O(N)
    //Removal - depends
    //Searching - O(N)
    //Access - O(1)