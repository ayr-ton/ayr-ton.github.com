# Don't touch in the lines starting from here

main() {
    if [ -d /tmp/jscache ];
    then
        rm -rf /tmp/jscache
        mkdir /tmp/jscache
    else
        mkdir /tmp/jscache
    fi
cc
    clear
    echo ""
    echo "Choose an option:"
    echo ""
    echo "1) Minify libs"
    echo "2) Minify app"
    echo "3) Minify all"
    echo "4) Exit."
    echo -ne "\n: "
    read op

   case $op in
      1) clearjs 'libs-*.js'
            for javascript in ${libs[@]}; do
                genjs $javascript libs-$libs_version.js
            done;;
      2) clearjs 'app-*.js'
            for javascript in ${app[@]}; do
                genjs $javascript app-$app_version.js
            done;;
      3) clearjs 'libs-*.js'
            for javascript in ${libs[@]}; do
                genjs $javascript libs-$libs_version.js
            done
         clearjs 'app-*.js'
            for javascript in ${app[@]}; do
                genjs $javascript app-$app_version.js
            done;;
      4) cd $NOW;
         exit ;;
      *) "Unknown option." ; echo ; main ;;
   esac
}

clearjs() {
    rm ../js/$1
}

genjs() {
    javascript=js/$1
    yui="java -jar yuicompressor-2.4.7/build/yuicompressor-2.4.7.jar"
    status='[FAIL]'
    group=../js/$2
libs.array
    if [ -f $javascript ];
    then
        $yui $javascript -o /tmp/jscache/$1
        echo "/* =====================| $1 - BEGIN |=================== */" >> $group &&
        cat /tmp/jscache/$1 >> $group &&
        echo "" >> $group &&
        echo "/* =====================| $1 - END |=================== */" >> $group &&
        echo "" >> $group &&
        status='[ OK ]'
    fi

    echo "Minifying $1 to $2 $status"
}
main
