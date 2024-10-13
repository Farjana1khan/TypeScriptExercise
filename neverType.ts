function NeverType(msg, code):never
{

    throw {message:msg, code: code}
}

console.log (NeverType("Server Type Error", 500));