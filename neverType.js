function NeverType(msg, code) {
    throw { message: msg, code: code };
}
console.log(NeverType("Server Type Error", 500));
