var divs = document.querySelectorAll( 'div[class *= "attachments"]' );

var urls = []; for ( var i = 0; i < divs.length; i++ ) {
    var a = divs[i].getElementsByTagName( 'a' );

    for ( var n = 0; n < a.length; n++ ) {
        urls = urls.concat( [a[n].href] );
    }
}

function downloadAll( urls ) {
    var link = document.createElement( 'a' );
    link.setAttribute( 'download', null );
    link.style.display = 'none';

    document.body.appendChild( link );

    for ( var i = 0; i < urls.length; i++ ) {
        link.setAttribute( 'href', urls[i] ); link.click();
    }

    document.body.removeChild( link );
}

downloadAll( urls );
