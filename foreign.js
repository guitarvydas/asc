function replaceSlash (s) {
    return s.replace ("/" ,"_");
}

function gen (prefix) {
    var i = scopeGet ("counter");
    scopeModify ("counter", i + 1);
    return prefix + i.toString ();
}
