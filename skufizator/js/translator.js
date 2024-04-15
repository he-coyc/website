function do_translation(){
    var input_text = document.getElementById('input_element').value; // ввод
    var output_text = input_text;

    output_text = output_text.replaceAll(', ', ' , ');
    output_text = output_text.replaceAll('...', '..');
    output_text = output_text.replaceAll('. ', ' .');
    output_text = output_text.replaceAll('?', '?..');
    output_text = output_text.replaceAll('!', ' !!!');
    output_text = output_text.replaceAll(')', ' ))))');

    output_text = capitalizeFirstLetter(output_text)
    
    if( output_text.slice(output_text.length-1) != '.' ){
        if( output_text.slice(output_text.length-1) != '!' && output_text.slice(output_text.length) != '?')
            output_text += '.';
    }
    if( output_text.slice(output_text.length-1) == 'ч' ){
        output_text.charAt(output_text.length-1) = '.';
    }

    document.getElementById('output_element').innerText = output_text; // вывод
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function copy_translation(){
    navigator.clipboard.writeText(document.getElementById('output_element').textContent);
    console.log(document.getElementById('output_element').textContent);
}