VER=0.3.1

shell=('jquery-1.7.1.js' 'jquery.mousewheel-min.js' 'jquery.terminal-0.4.17.js' 'terminal.js')

main() {
if [ -d /tmp/jscache ];
then
    rm -rf /tmp/jscache
    mkdir /tmp/jscache
else 
    mkdir /tmp/jscache
fi

clearjs shell-$VER.js

for javascript in "${shell[@]}"; do
            genjs $javascript shell-$VER.js
done
}

clearjs() {
    echo '' > js/$1
}

genjs() {
    javascript=js/$1
    yui="java -jar yuicompressor-2.4.7/build/yuicompressor-2.4.7.jar"
    status='[FAIL]'
    group=js/$2 
    
    if [ -f $javascript ];
    then
        $yui $javascript -o /tmp/jscache/$1
        cat /tmp/jscache/$1 >> $group &&
        status='[ OK ]'
    fi
    
    echo "Minifying $1 to $2 $status"
}

main
