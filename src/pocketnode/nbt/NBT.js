class NBT{

    static get TAG_End() {return  0};
    static get TAG_Byte() {return 1};
    static get TAG_Short() {return 2}; 
    static get TAG_Int() {return 3}; 
    static get TAG_Long() {return 4}; 
    static get TAG_Float() {return 5}; 
    static get TAG_Double() {return 6}; 
    static get TAG_ByteArray() {return 7}; 
    static get TAG_String() {return 8}; 
    static get TAG_List() {return 9}; 
    static get TAG_Compound() {return 10}; 
    static get TAG_IntArray() {return 11};

    static createTag(type){

    }
}

module.exports = NBT;