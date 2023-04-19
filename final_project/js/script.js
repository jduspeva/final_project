import Lightbox from '../js/photoswipe-lightbox.esm';
import PhotoSwipe from '../js/photoswipe.esm.js';
const lightbox1 = new Lightbox({
    gallery: '#port_arch',
    children: 'a',
    pswpModule: PhotoSwipe
});
const lightbox2 = new Lightbox({
    gallery: '#port_auto',
    children: 'a',
    pswpModule: PhotoSwipe
});
const lightbox3 = new Lightbox({
    gallery: '#port_port',
    children: 'a',
    pswpModule: PhotoSwipe
});
lightbox1.init();
lightbox2.init();
lightbox3.init();