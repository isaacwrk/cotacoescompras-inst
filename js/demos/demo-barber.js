(function($){'use strict';$(window).on('load',function(){if($('.custom-instagram-feed-carousel').get(0)){var $this=$('.custom-instagram-feed-carousel'),username='oklerportobarber',$wrapper=$this,html=$wrapper.html();$this.instagramFeed({'username':username,'get_data':true,'callback':function(data,$this){var $wrapper=$($this),html=$wrapper.html(),images=data.edge_owner_to_timeline_media.edges,output='',image_url='',caption='',link='',items_number=($wrapper.data('items-number'))?$wrapper.data('items-number'):6;if(items_number>12){items_number=12;}
if(items_number<1){items_number=1;}
for(var i=0;i<items_number;i++){if(typeof images[i]=='undefined'){break;}
if(typeof images[i].node.display_url!='undefined'){image_url=images[i].node.display_url;}
if(typeof images[i].node.edge_media_to_caption.edges[0]!='undefined'){caption=images[i].node.edge_media_to_caption.edges[0].node.text;}
if(typeof images[i].node.shortcode!='undefined'){link=images[i].node.shortcode;}
output+='<div>';output+='<a class="text-decoration-none" target="_blank" href="https://www.instagram.com/p/'+link+'/">';output+='<img src="'+image_url+'" class="img-fluid" alt="'+caption+'" />';output+='</a>';output+='</div>';}
$wrapper.append(output);$wrapper.addClass('owl-carousel mb-0').owlCarousel({responsive:{0:{items:1},575:{items:2},767:{items:3},991:{items:5},1440:{items:7}},nav:false,dots:false,loop:true,navText:[],autoplay:true,autoplayTimeout:6000,rtl:($('html').attr('dir')=='rtl')?true:false});}});}});}).apply(this,[jQuery]);