class produnct {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    getname() {
        console.log("Name is: " + this._name);
    }
}
let obj = new produnct();
obj.name = "Asit kumar";
obj.getname();

