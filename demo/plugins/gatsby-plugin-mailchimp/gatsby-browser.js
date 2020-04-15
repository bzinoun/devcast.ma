/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// You can delete this file if you're not using it


const injectMailchimSubscription = () => {
    var template = document.createElement('div');
    let html_unsafe =`
        <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
        <style type="text/css">
            #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
        </style>
        <div id="mc_embed_signup">
        <form action="https://evidence-platform.us8.list-manage.com/subscribe/post?u=e8ecd68b6551ca6c9695798bf&amp;id=b27f588894" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
            <label for="mce-EMAIL">Abonnez-vous à la newsletter</label>
            <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="adresse email" required>
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e8ecd68b6551ca6c9695798bf_b27f588894" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
        </form>
        </div>
    `
    template.innerHTML = html_unsafe.trim();
    let referenceNode = document.getElementsByClassName('headroom-wrapper')[0];
    referenceNode.parentNode.insertBefore(template, referenceNode.nextSibling);     
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
    injectMailchimSubscription();
}