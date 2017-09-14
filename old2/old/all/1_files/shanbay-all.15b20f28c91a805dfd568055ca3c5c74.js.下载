!function($){$(function(){"use strict";$.support.transition=(function(){var transitionEnd=(function(){var el=document.createElement('bootstrap'),transEndEventNames={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd','msTransition':'MSTransitionEnd','transition':'transitionend'},name
for(name in transEndEventNames){if(el.style[name]!==undefined){return transEndEventNames[name]}}}())
return transitionEnd&&{end:transitionEnd}})()})}(window.jQuery);!function($){"use strict";var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.prototype.close=function(e){var $this=$(this),selector=$this.attr('data-target'),$parent
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
$parent=$(selector)
e&&e.preventDefault()
$parent.length||($parent=$this.hasClass('alert')?$this:$this.parent())
$parent.trigger(e=$.Event('close'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.trigger('closed').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.on($.support.transition.end,removeElement):removeElement()}
$.fn.alert=function(option){return this.each(function(){var $this=$(this),data=$this.data('alert')
if(!data)$this.data('alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.alert.Constructor=Alert
$(function(){$('body').on('click.alert.data-api',dismiss,Alert.prototype.close)})}(window.jQuery);!function($){"use strict";var Modal=function(content,options){this.options=options
this.$element=$(content).delegate('[data-dismiss="modal"]','click.dismiss.modal',$.proxy(this.hide,this))}
var isIE=(window.ActiveXObject||"ActiveXObject"in window)
Modal.prototype={constructor:Modal,toggle:function(){return this[!this.isShown?'show':'hide']()},show:function(){var that=this,e=$.Event('show')
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
$('body').addClass('modal-open')
this.isShown=true
escape.call(this)
backdrop.call(this,function(){var transition=$.support.transition&&that.$element.hasClass('fade')&&!isIE
if(!that.$element.parent().length){that.$element.appendTo(document.body)}
that.$element.show()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in')
transition?that.$element.one($.support.transition.end,function(){that.$element.trigger('shown')}):that.$element.trigger('shown')})},hide:function(e){e&&e.preventDefault()
var that=this
e=$.Event('hide')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
$('body').removeClass('modal-open')
escape.call(this)
this.$element.removeClass('in')
$.support.transition&&this.$element.hasClass('fade')&&!isIE?hideWithTransition.call(this):hideModal.call(this)}}
function hideWithTransition(){var that=this,timeout=setTimeout(function(){that.$element.off($.support.transition.end)
hideModal.call(that)},500)
this.$element.one($.support.transition.end,function(){clearTimeout(timeout)
hideModal.call(that)})}
function hideModal(that){this.$element.hide().trigger('hidden')
backdrop.call(this)}
function backdrop(callback){var that=this,animate=this.$element.hasClass('fade')&&!isIE?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(document.body)
if(this.options.backdrop!='static'){this.$backdrop.click($.proxy(this.hide,this))}
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
doAnimate?this.$backdrop.one($.support.transition.end,callback):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
$.support.transition&&this.$element.hasClass('fade')&&!isIE?this.$backdrop.one($.support.transition.end,$.proxy(removeBackdrop,this)):removeBackdrop.call(this)}else if(callback){callback()}}
function removeBackdrop(){this.$backdrop.remove()
this.$backdrop=null}
function escape(){var that=this
if(this.isShown&&this.options.keyboard){$(document).on('keyup.dismiss.modal',function(e){e.which==27&&that.hide()})}else if(!this.isShown){$(document).off('keyup.dismiss.modal')}}
$.fn.modal=function(option){return this.each(function(){var $this=$(this),data=$this.data('modal'),options=$.extend({},$.fn.modal.defaults,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option]()
else if(options.show)data.show()})}
$.fn.modal.defaults={backdrop:true,keyboard:true,show:true}
$.fn.modal.Constructor=Modal
$(function(){$('body').on('click.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this),href,$target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')),option=$target.data('modal')?'toggle':$.extend({},$target.data(),$this.data())
e.preventDefault()
$target.modal(option)})})}(window.jQuery);!function($){"use strict";var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},$.fn.button.defaults,options)}
Button.prototype.setState=function(state){var d='disabled',$el=this.$element,data=$el.data(),val=$el.is('input')?'val':'html'
state=state+'Text'
data.resetText||$el.data('resetText',$el[val]())
$el[val](data[state]||this.options[state])
setTimeout(function(){state=='loadingText'?$el.addClass(d).attr(d,d):$el.removeClass(d).removeAttr(d)},0)}
Button.prototype.toggle=function(){var $parent=this.$element.parent('[data-toggle="buttons-radio"]')
$parent&&$parent.find('.active').removeClass('active')
this.$element.toggleClass('active')}
$.fn.button=function(option){return this.each(function(){var $this=$(this),data=$this.data('button'),options=typeof option=='object'&&option
if(!data)$this.data('button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
$.fn.button.defaults={loadingText:'loading...'}
$.fn.button.Constructor=Button
$(function(){$('body').on('click.button.data-api','[data-toggle^=button]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
$btn.button('toggle')})})}(window.jQuery);!function($){"use strict";var Carousel=function(element,options){this.$element=$(element)
this.options=options
this.options.slide&&this.slide(this.options.slide)
this.options.pause=='hover'&&this.$element.on('mouseenter',$.proxy(this.pause,this)).on('mouseleave',$.proxy(this.cycle,this))}
Carousel.prototype={cycle:function(e){if(!e)this.paused=false
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this},to:function(pos){var $active=this.$element.find('.active'),children=$active.parent().children(),activePos=children.index($active),that=this
if(pos>(children.length-1)||pos<0)return
if(this.sliding){return this.$element.one('slid',function(){that.to(pos)})}
if(activePos==pos){return this.pause().cycle()}
return this.slide(pos>activePos?'next':'prev',$(children[pos]))},pause:function(e){if(!e)this.paused=true
clearInterval(this.interval)
this.interval=null
return this},next:function(){if(this.sliding)return
return this.slide('next')},prev:function(){if(this.sliding)return
return this.slide('prev')},slide:function(type,next){var $active=this.$element.find('.active'),$next=next||$active[type](),isCycling=this.interval,direction=type=='next'?'left':'right',fallback=type=='next'?'first':'last',that=this,e=$.Event('slide')
this.sliding=true
isCycling&&this.pause()
$next=$next.length?$next:this.$element.find('.item')[fallback]()
if($next.hasClass('active'))return
if($.support.transition&&this.$element.hasClass('slide')){this.$element.trigger(e)
if(e.isDefaultPrevented())return
$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
this.$element.one($.support.transition.end,function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger('slid')},0)})}else{this.$element.trigger(e)
if(e.isDefaultPrevented())return
$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger('slid')}
isCycling&&this.cycle()
return this}}
$.fn.carousel=function(option){return this.each(function(){var $this=$(this),data=$this.data('carousel'),options=$.extend({},$.fn.carousel.defaults,typeof option=='object'&&option)
if(!data)$this.data('carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(typeof option=='string'||(option=options.slide))data[option]()
else if(options.interval)data.cycle()})}
$.fn.carousel.defaults={interval:5000,pause:'hover'}
$.fn.carousel.Constructor=Carousel
$(function(){$('body').on('click.carousel.data-api','[data-slide]',function(e){var $this=$(this),href,$target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')),options=!$target.data('modal')&&$.extend({},$target.data(),$this.data())
$target.carousel(options)
e.preventDefault()})})}(window.jQuery);!function($){"use strict";var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},$.fn.collapse.defaults,options)
if(this.options.parent){this.$parent=$(this.options.parent)}
this.options.toggle&&this.toggle()}
Collapse.prototype={constructor:Collapse,dimension:function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'},show:function(){var dimension,scroll,actives,hasData
if(this.transitioning)return
dimension=this.dimension()
scroll=$.camelCase(['scroll',dimension].join('-'))
actives=this.$parent&&this.$parent.find('> .accordion-group > .in')
if(actives&&actives.length){hasData=actives.data('collapse')
if(hasData&&hasData.transitioning)return
actives.collapse('hide')
hasData||actives.data('collapse',null)}
this.$element[dimension](0)
this.transition('addClass',$.Event('show'),'shown')
this.$element[dimension](this.$element[0][scroll])},hide:function(){var dimension
if(this.transitioning)return
dimension=this.dimension()
this.reset(this.$element[dimension]())
this.transition('removeClass',$.Event('hide'),'hidden')
this.$element[dimension](0)},reset:function(size){var dimension=this.dimension()
this.$element.removeClass('collapse')
[dimension](size||'auto')
[0].offsetWidth
this.$element[size!==null?'addClass':'removeClass']('collapse')
return this},transition:function(method,startEvent,completeEvent){var that=this,complete=function(){if(startEvent.type=='show')that.reset()
that.transitioning=0
that.$element.trigger(completeEvent)}
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
this.transitioning=1
this.$element[method]('in')
$.support.transition&&this.$element.hasClass('collapse')?this.$element.one($.support.transition.end,complete):complete()},toggle:function(){this[this.$element.hasClass('in')?'hide':'show']()}}
$.fn.collapse=function(option){return this.each(function(){var $this=$(this),data=$this.data('collapse'),options=typeof option=='object'&&option
if(!data)$this.data('collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.collapse.defaults={toggle:true}
$.fn.collapse.Constructor=Collapse
$(function(){$('body').on('click.collapse.data-api','[data-toggle=collapse]',function(e){var $this=$(this),href,target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''),option=$(target).data('collapse')?'toggle':$this.data()
$(target).collapse(option)})})}(window.jQuery);!function($){"use strict";var toggle='[data-toggle="dropdown"]',Dropdown=function(element){var $el=$(element).on('click.dropdown.data-api',this.toggle)
$('html').on('click.dropdown.data-api',function(){$el.parent().removeClass('open')})}
Dropdown.prototype={constructor:Dropdown,toggle:function(e){var $this=$(this),$parent,selector,isActive
if($this.is('.disabled, :disabled'))return
selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
$parent=$(selector)
$parent.length||($parent=$this.parent())
isActive=$parent.hasClass('open')
clearMenus()
if(!isActive)$parent.toggleClass('open')
return false}}
function clearMenus(){$(toggle).parent().removeClass('open')}
$.fn.dropdown=function(option){return this.each(function(){var $this=$(this),data=$this.data('dropdown')
if(!data)$this.data('dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.dropdown.Constructor=Dropdown
$(function(){$('html').on('click.dropdown.data-api',clearMenus)
$('body').on('click.dropdown','.dropdown form',function(e){e.stopPropagation()}).on('click.dropdown.data-api',toggle,Dropdown.prototype.toggle)})}(window.jQuery);!function($){"use strict";function ScrollSpy(element,options){var process=$.proxy(this.process,this),$element=$(element).is('body')?$(window):$(element),href
this.options=$.extend({},$.fn.scrollspy.defaults,options)
this.$scrollElement=$element.on('scroll.scroll.data-api',process)
this.selector=(this.options.target||((href=$(element).attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))||'')+' .nav li > a'
this.$body=$('body')
this.refresh()
this.process()}
ScrollSpy.prototype={constructor:ScrollSpy,refresh:function(){var self=this,$targets
this.offsets=$([])
this.targets=$([])
$targets=this.$body.find(this.selector).map(function(){var $el=$(this),href=$el.data('target')||$el.attr('href'),$href=/^#\w/.test(href)&&$(href)
return($href&&href.length&&[[$href.position().top,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0])
self.targets.push(this[1])})},process:function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset,scrollHeight=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,maxScroll=scrollHeight-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget,i
if(scrollTop>=maxScroll){return activeTarget!=(i=targets.last()[0])&&this.activate(i)}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])}},activate:function(target){var active,selector
this.activeTarget=target
$(this.selector).parent('.active').removeClass('active')
selector=this.selector
+'[data-target="'+target+'"],'
+this.selector+'[href="'+target+'"]'
active=$(selector).parent('li').addClass('active')
if(active.parent('.dropdown-menu')){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate')}}
$.fn.scrollspy=function(option){return this.each(function(){var $this=$(this),data=$this.data('scrollspy'),options=typeof option=='object'&&option
if(!data)$this.data('scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.defaults={offset:10}
$(function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
$spy.scrollspy($spy.data())})})}(window.jQuery);!function($){"use strict";var Tab=function(element){this.element=$(element)}
Tab.prototype={constructor:Tab,show:function(){var $this=this.element,$ul=$this.closest('ul:not(.dropdown-menu)'),selector=$this.attr('data-target'),previous,$target,e
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
previous=$ul.find('.active a').last()[0]
e=$.Event('show',{relatedTarget:previous})
$this.trigger(e)
if(e.isDefaultPrevented())return
$target=$(selector)
this.activate($this.parent('li'),$ul)
this.activate($target,$target.parent(),function(){$this.trigger({type:'shown',relatedTarget:previous})})},activate:function(element,container,callback){var $active=container.find('> .active'),transition=callback&&$.support.transition&&$active.hasClass('fade')
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active')
element.addClass('active')
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu')){element.closest('li.dropdown').addClass('active')}
callback&&callback()}
transition?$active.one($.support.transition.end,next):next()
$active.removeClass('in')}}
$.fn.tab=function(option){return this.each(function(){var $this=$(this),data=$this.data('tab')
if(!data)$this.data('tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
$.fn.tab.Constructor=Tab
$(function(){$('body').on('click.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault()
$(this).tab('show')})})}(window.jQuery);!function($){"use strict";var Tooltip=function(element,options){this.init('tooltip',element,options)}
Tooltip.prototype={constructor:Tooltip,init:function(type,element,options){var eventIn,eventOut
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.enabled=true
if(this.options.trigger!='manual'){eventIn=this.options.trigger=='hover'?'mouseenter':'focus'
eventOut=this.options.trigger=='hover'?'mouseleave':'blur'
this.$element.on(eventIn,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut,this.options.selector,$.proxy(this.leave,this))}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()},getOptions:function(options){options=$.extend({},$.fn[this.type].defaults,options,this.$element.data())
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options},enter:function(e){var self=$(e.currentTarget)[this.type](this._options).data(this.type)
if(!self.options.delay||!self.options.delay.show)return self.show()
clearTimeout(this.timeout)
self.hoverState='in'
this.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)},leave:function(e){var self=$(e.currentTarget)[this.type](this._options).data(this.type)
if(this.timeout)clearTimeout(this.timeout)
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.hoverState='out'
this.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)},show:function(){var $tip,inside,pos,actualWidth,actualHeight,placement,tp
if(this.hasContent()&&this.enabled){$tip=this.tip()
this.setContent()
if(this.options.animation){$tip.addClass('fade')}
placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
inside=/in/.test(placement)
$tip.remove().css({top:0,left:0,display:'block'}).appendTo(inside?this.$element:document.body)
pos=this.getPosition(inside)
actualWidth=$tip[0].offsetWidth
actualHeight=$tip[0].offsetHeight
switch(inside?placement.split(' ')[1]:placement){case'bottom':tp={top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}
break
case'top':tp={top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}
break
case'left':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}
break
case'right':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}
break}
$tip.css(tp).addClass(placement).addClass('in')}},isHTML:function(text){return typeof text!='string'||(text.charAt(0)==="<"&&text.charAt(text.length-1)===">"&&text.length>=3)||/^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(text)},setContent:function(){var $tip=this.tip(),title=this.getTitle()
$tip.find('.tooltip-inner')[this.isHTML(title)?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')},hide:function(){var that=this,$tip=this.tip()
$tip.removeClass('in')
function removeWithAnimation(){var timeout=setTimeout(function(){$tip.off($.support.transition.end).remove()},500)
$tip.one($.support.transition.end,function(){clearTimeout(timeout)
$tip.remove()})}
$.support.transition&&this.$tip.hasClass('fade')?removeWithAnimation():$tip.remove()},fixTitle:function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').removeAttr('title')}},hasContent:function(){return this.getTitle()},getPosition:function(inside){return $.extend({},(inside?{top:0,left:0}:this.$element.offset()),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var title,$e=this.$element,o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title},tip:function(){return this.$tip=this.$tip||$(this.options.template)},validate:function(){if(!this.$element[0].parentNode){this.hide()
this.$element=null
this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass('in')?'hide':'show']()}}
$.fn.tooltip=function(option){return this.each(function(){var $this=$(this),data=$this.data('tooltip'),options=typeof option=='object'&&option
if(!data)$this.data('tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.defaults={animation:true,placement:'top',selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover',title:'',delay:0}}(window.jQuery);!function($){"use strict";var Popover=function(element,options){this.init('popover',element,options)}
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype,{constructor:Popover,setContent:function(){var $tip=this.tip(),title=this.getTitle(),content=this.getContent()
$tip.find('.popover-title')[this.isHTML(title)?'html':'text'](title)
$tip.find('.popover-content > *')[this.isHTML(content)?'html':'text'](content)
$tip.removeClass('fade top bottom left right in')},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var content,$e=this.$element,o=this.options
content=$e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)
return content},tip:function(){if(!this.$tip){this.$tip=$(this.options.template)}
return this.$tip}})
$.fn.popover=function(option){return this.each(function(){var $this=$(this),data=$this.data('popover'),options=typeof option=='object'&&option
if(!data)$this.data('popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.popover.Constructor=Popover
$.fn.popover.defaults=$.extend({},$.fn.tooltip.defaults,{placement:'right',content:'',template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery);!function($){"use strict";var Typeahead=function(element,options){this.$element=$(element)
this.options=$.extend({},$.fn.typeahead.defaults,options)
this.matcher=this.options.matcher||this.matcher
this.sorter=this.options.sorter||this.sorter
this.highlighter=this.options.highlighter||this.highlighter
this.updater=this.options.updater||this.updater
this.$menu=$(this.options.menu).appendTo('body')
this.source=this.options.source
this.shown=false
this.listen()}
Typeahead.prototype={constructor:Typeahead,select:function(){var val=this.$menu.find('.active').attr('data-value')
this.$element.val(this.updater(val)).change()
return this.hide()},updater:function(item){return item},show:function(){var pos=$.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight})
this.$menu.css({top:pos.top+pos.height,left:pos.left})
this.$menu.show()
this.shown=true
return this},hide:function(){this.$menu.hide()
this.shown=false
return this},lookup:function(event){var that=this,items,q
this.query=this.$element.val()
if(!this.query){return this.shown?this.hide():this}
items=$.grep(this.source,function(item){return that.matcher(item)})
items=this.sorter(items)
if(!items.length){return this.shown?this.hide():this}
return this.render(items.slice(0,this.options.items)).show()},matcher:function(item){return~item.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(items){var beginswith=[],caseSensitive=[],caseInsensitive=[],item
while(item=items.shift()){if(!item.toLowerCase().indexOf(this.query.toLowerCase()))beginswith.push(item)
else if(~item.indexOf(this.query))caseSensitive.push(item)
else caseInsensitive.push(item)}
return beginswith.concat(caseSensitive,caseInsensitive)},highlighter:function(item){var query=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,'\\$&')
return item.replace(new RegExp('('+query+')','ig'),function($1,match){return'<strong>'+match+'</strong>'})},render:function(items){var that=this
items=$(items).map(function(i,item){i=$(that.options.item).attr('data-value',item)
i.find('a').html(that.highlighter(item))
return i[0]})
items.first().addClass('active')
this.$menu.html(items)
return this},next:function(event){var active=this.$menu.find('.active').removeClass('active'),next=active.next()
if(!next.length){next=$(this.$menu.find('li')[0])}
next.addClass('active')},prev:function(event){var active=this.$menu.find('.active').removeClass('active'),prev=active.prev()
if(!prev.length){prev=this.$menu.find('li').last()}
prev.addClass('active')},listen:function(){this.$element.on('blur',$.proxy(this.blur,this)).on('keypress',$.proxy(this.keypress,this)).on('keyup',$.proxy(this.keyup,this))
if($.browser.webkit||$.browser.msie){this.$element.on('keydown',$.proxy(this.keypress,this))}
this.$menu.on('click',$.proxy(this.click,this)).on('mouseenter','li',$.proxy(this.mouseenter,this))},keyup:function(e){switch(e.keyCode){case 40:case 38:break
case 9:case 13:if(!this.shown)return
this.select()
break
case 27:if(!this.shown)return
this.hide()
break
default:this.lookup()}
e.stopPropagation()
e.preventDefault()},keypress:function(e){if(!this.shown)return
switch(e.keyCode){case 9:case 13:case 27:e.preventDefault()
break
case 38:if(e.type!='keydown')break
e.preventDefault()
this.prev()
break
case 40:if(e.type!='keydown')break
e.preventDefault()
this.next()
break}
e.stopPropagation()},blur:function(e){var that=this
setTimeout(function(){that.hide()},150)},click:function(e){e.stopPropagation()
e.preventDefault()
this.select()},mouseenter:function(e){this.$menu.find('.active').removeClass('active')
$(e.currentTarget).addClass('active')}}
$.fn.typeahead=function(option){return this.each(function(){var $this=$(this),data=$this.data('typeahead'),options=typeof option=='object'&&option
if(!data)$this.data('typeahead',(data=new Typeahead(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>'}
$.fn.typeahead.Constructor=Typeahead
$(function(){$('body').on('focus.typeahead.data-api','[data-provide="typeahead"]',function(e){var $this=$(this)
if($this.data('typeahead'))return
e.preventDefault()
$this.typeahead($this.data())})})}(window.jQuery);!function($){function UTCDate(){return new Date(Date.UTC.apply(Date,arguments));}
function UTCToday(){var today=new Date();return UTCDate(today.getUTCFullYear(),today.getUTCMonth(),today.getUTCDate());}
var Datepicker=function(element,options){var that=this;this.timestamp=Date.parse(new Date())+parseInt(Math.random()*1000);this.element=$(element);this.language=options.language||this.element.data('date-language')||"en";this.language=this.language in dates?this.language:"en";this.isRTL=dates[this.language].rtl||false;this.format=DPGlobal.parseFormat(options.format||this.element.data('date-format')||'mm/dd/yyyy');this.isInline=false;this.isInput=this.element.is('input');this.component=this.element.is('.date')?this.element.find('.add-on'):false;this.hasInput=this.component&&this.element.find('input').length;if(this.component&&this.component.length===0)
this.component=false;this._attachEvents();this.forceParse=true;if('forceParse'in options){this.forceParse=options.forceParse;}else if('dateForceParse'in this.element.data()){this.forceParse=this.element.data('date-force-parse');}
this.picker=$(DPGlobal.template).appendTo(this.isInline?this.element:'body').on({click:$.proxy(this.click,this),mousedown:$.proxy(this.mousedown,this)});if(this.isInline){this.picker.addClass('datepicker-inline');}else{this.picker.addClass('datepicker-dropdown dropdown-menu');}
this.picker.addClass(''+this.timestamp);if(this.isRTL){this.picker.addClass('datepicker-rtl');this.picker.find('.prev i, .next i').toggleClass('icon-arrow-left icon-arrow-right');}
$(document).on('mousedown',function(e){if($(e.target).closest('.datepicker').length===0){datepickers=$('body').find('div.datepicker');for(var index=0;index<datepickers.length;index++){style=datepickers.eq(index).attr('style');if(style&&style.indexOf('block')>=0){class_str=datepickers.eq(index).attr('class');if(class_str.indexOf(that.timestamp+"")>=0){that.hide();}}}}});this.autoclose=false;if('autoclose'in options){this.autoclose=options.autoclose;}else if('dateAutoclose'in this.element.data()){this.autoclose=this.element.data('date-autoclose');}
this.keyboardNavigation=true;if('keyboardNavigation'in options){this.keyboardNavigation=options.keyboardNavigation;}else if('dateKeyboardNavigation'in this.element.data()){this.keyboardNavigation=this.element.data('date-keyboard-navigation');}
this.viewMode=this.startViewMode=0;switch(options.startView||this.element.data('date-start-view')){case 2:case'decade':this.viewMode=this.startViewMode=2;break;case 1:case'year':this.viewMode=this.startViewMode=1;break;}
this.todayBtn=(options.todayBtn||this.element.data('date-today-btn')||false);this.todayHighlight=(options.todayHighlight||this.element.data('date-today-highlight')||false);this.weekStart=((options.weekStart||this.element.data('date-weekstart')||dates[this.language].weekStart||0)%7);this.weekEnd=((this.weekStart+6)%7);this.startDate=-Infinity;this.endDate=Infinity;this.daysOfWeekDisabled=[];this.setStartDate(options.startDate||this.element.data('date-startdate'));this.setEndDate(options.endDate||this.element.data('date-enddate'));this.setDaysOfWeekDisabled(options.daysOfWeekDisabled||this.element.data('date-days-of-week-disabled'));this.fillDow();this.fillMonths();this.update();this.showMode();if(this.isInline){this.show();}};Datepicker.prototype={constructor:Datepicker,_events:[],_attachEvents:function(){this._detachEvents();if(this.isInput){this._events=[[this.element,{focus:$.proxy(this.show,this),keyup:$.proxy(this.update,this),keydown:$.proxy(this.keydown,this)}]];}
else if(this.component&&this.hasInput){this._events=[[this.element.find('input'),{focus:$.proxy(this.show,this),keyup:$.proxy(this.update,this),keydown:$.proxy(this.keydown,this)}],[this.component,{click:$.proxy(this.show,this)}]];}
else if(this.element.is('div')){this.isInline=true;}
else{this._events=[[this.element,{click:$.proxy(this.show,this)}]];}
for(var i=0,el,ev;i<this._events.length;i++){el=this._events[i][0];ev=this._events[i][1];el.on(ev);}},_detachEvents:function(){for(var i=0,el,ev;i<this._events.length;i++){el=this._events[i][0];ev=this._events[i][1];el.off(ev);}
this._events=[];},show:function(e){this.picker.show();this.height=this.component?this.component.outerHeight():this.element.outerHeight();this.update();this.place();$(window).on('resize',$.proxy(this.place,this));if(e){e.stopPropagation();e.preventDefault();}
this.element.trigger({type:'show',date:this.date});},hide:function(e){if(this.isInline)return;this.picker.hide();$(window).off('resize',this.place);this.viewMode=this.startViewMode;this.showMode();if(!this.isInput){$(document).off('mousedown',this.hide);}
if(this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find('input').val()))
this.setValue();this.element.trigger({type:'hide',date:this.date});},remove:function(){this._detachEvents();this.picker.remove();delete this.element.data().datepicker;},getDate:function(){var d=this.getUTCDate();return new Date(d.getTime()+(d.getTimezoneOffset()*60000));},getUTCDate:function(){return this.date;},setDate:function(d){this.setUTCDate(new Date(d.getTime()-(d.getTimezoneOffset()*60000)));},setUTCDate:function(d){this.date=d;this.setValue();},setValue:function(){var formatted=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find('input').prop('value',formatted);}
this.element.data('date',formatted);}else{this.element.prop('value',formatted);}},getFormattedDate:function(format){if(format==undefined)format=this.format;return DPGlobal.formatDate(this.date,format,this.language);},setStartDate:function(startDate){this.startDate=startDate||-Infinity;if(this.startDate!==-Infinity){this.startDate=DPGlobal.parseDate(this.startDate,this.format,this.language);}
this.update();this.updateNavArrows();},setEndDate:function(endDate){this.endDate=endDate||Infinity;if(this.endDate!==Infinity){this.endDate=DPGlobal.parseDate(this.endDate,this.format,this.language);}
this.update();this.updateNavArrows();},setDaysOfWeekDisabled:function(daysOfWeekDisabled){this.daysOfWeekDisabled=daysOfWeekDisabled||[];if(!$.isArray(this.daysOfWeekDisabled)){this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/);}
this.daysOfWeekDisabled=$.map(this.daysOfWeekDisabled,function(d){return parseInt(d,10);});this.update();this.updateNavArrows();},place:function(){if(this.isInline)return;var zIndex=parseInt(this.element.parents().filter(function(){return $(this).css('z-index')!='auto';}).first().css('z-index'))+10;var offset=this.component?this.component.offset():this.element.offset();this.picker.css({top:offset.top+this.height,left:offset.left,zIndex:zIndex});},update:function(){var date,fromArgs=false;if(arguments&&arguments.length&&(typeof arguments[0]==='string'||arguments[0]instanceof Date)){date=arguments[0];fromArgs=true;}else{date=this.isInput?this.element.prop('value'):this.element.data('date')||this.element.find('input').prop('value');}
this.date=DPGlobal.parseDate(date,this.format,this.language);if(fromArgs)this.setValue();if(this.date<this.startDate){this.viewDate=new Date(this.startDate);}else if(this.date>this.endDate){this.viewDate=new Date(this.endDate);}else{this.viewDate=new Date(this.date);}
this.fill();},fillDow:function(){var dowCnt=this.weekStart,html='<tr>';while(dowCnt<this.weekStart+7){html+='<th class="dow">'+dates[this.language].daysMin[(dowCnt++)%7]+'</th>';}
html+='</tr>';this.picker.find('.datepicker-days thead').append(html);},fillMonths:function(){var html='',i=0;while(i<12){html+='<span class="month">'+dates[this.language].monthsShort[i++]+'</span>';}
this.picker.find('.datepicker-months td').html(html);},fill:function(){var d=new Date(this.viewDate),year=d.getUTCFullYear(),month=d.getUTCMonth(),startYear=this.startDate!==-Infinity?this.startDate.getUTCFullYear():-Infinity,startMonth=this.startDate!==-Infinity?this.startDate.getUTCMonth():-Infinity,endYear=this.endDate!==Infinity?this.endDate.getUTCFullYear():Infinity,endMonth=this.endDate!==Infinity?this.endDate.getUTCMonth():Infinity,currentDate=this.date.valueOf(),today=new Date();this.picker.find('.datepicker-days thead th:eq(1)').text(dates[this.language].months[month]+' '+year);this.picker.find('tfoot th.today').text(dates[this.language].today).toggle(this.todayBtn!==false);this.updateNavArrows();this.fillMonths();var prevMonth=UTCDate(year,month-1,28,0,0,0,0),day=DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(),prevMonth.getUTCMonth());prevMonth.setUTCDate(day);prevMonth.setUTCDate(day-(prevMonth.getUTCDay()-this.weekStart+7)%7);var nextMonth=new Date(prevMonth);nextMonth.setUTCDate(nextMonth.getUTCDate()+42);nextMonth=nextMonth.valueOf();var html=[];var clsName;while(prevMonth.valueOf()<nextMonth){if(prevMonth.getUTCDay()==this.weekStart){html.push('<tr>');}
clsName='';if(prevMonth.getUTCFullYear()<year||(prevMonth.getUTCFullYear()==year&&prevMonth.getUTCMonth()<month)){clsName+=' old';}else if(prevMonth.getUTCFullYear()>year||(prevMonth.getUTCFullYear()==year&&prevMonth.getUTCMonth()>month)){clsName+=' new';}
if(this.todayHighlight&&prevMonth.getUTCFullYear()==today.getFullYear()&&prevMonth.getUTCMonth()==today.getMonth()&&prevMonth.getUTCDate()==today.getDate()){clsName+=' today';}
if(prevMonth.valueOf()==currentDate){clsName+=' active';}
if(prevMonth.valueOf()<this.startDate||prevMonth.valueOf()>this.endDate||$.inArray(prevMonth.getUTCDay(),this.daysOfWeekDisabled)!==-1){clsName+=' disabled';}
html.push('<td class="day'+clsName+'">'+prevMonth.getUTCDate()+'</td>');if(prevMonth.getUTCDay()==this.weekEnd){html.push('</tr>');}
prevMonth.setUTCDate(prevMonth.getUTCDate()+1);}
this.picker.find('.datepicker-days tbody').empty().append(html.join(''));var currentYear=this.date.getUTCFullYear();var months=this.picker.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');if(currentYear==year){months.eq(this.date.getUTCMonth()).addClass('active');}
if(year<startYear||year>endYear){months.addClass('disabled');}
if(year==startYear){months.slice(0,startMonth).addClass('disabled');}
if(year==endYear){months.slice(endMonth+1).addClass('disabled');}
html='';year=parseInt(year/10,10)*10;var yearCont=this.picker.find('.datepicker-years').find('th:eq(1)').text(year+'-'+(year+9)).end().find('td');year-=1;for(var i=-1;i<11;i++){html+='<span class="year'+(i==-1||i==10?' old':'')+(currentYear==year?' active':'')+(year<startYear||year>endYear?' disabled':'')+'">'+year+'</span>';year+=1;}
yearCont.html(html);},updateNavArrows:function(){var d=new Date(this.viewDate),year=d.getUTCFullYear(),month=d.getUTCMonth();switch(this.viewMode){case 0:if(this.startDate!==-Infinity&&year<=this.startDate.getUTCFullYear()&&month<=this.startDate.getUTCMonth()){this.picker.find('.prev').css({visibility:'hidden'});}else{this.picker.find('.prev').css({visibility:'visible'});}
if(this.endDate!==Infinity&&year>=this.endDate.getUTCFullYear()&&month>=this.endDate.getUTCMonth()){this.picker.find('.next').css({visibility:'hidden'});}else{this.picker.find('.next').css({visibility:'visible'});}
break;case 1:case 2:if(this.startDate!==-Infinity&&year<=this.startDate.getUTCFullYear()){this.picker.find('.prev').css({visibility:'hidden'});}else{this.picker.find('.prev').css({visibility:'visible'});}
if(this.endDate!==Infinity&&year>=this.endDate.getUTCFullYear()){this.picker.find('.next').css({visibility:'hidden'});}else{this.picker.find('.next').css({visibility:'visible'});}
break;}},click:function(e){e.stopPropagation();e.preventDefault();var target=$(e.target).closest('span, td, th');if(target.length==1){switch(target[0].nodeName.toLowerCase()){case'th':switch(target[0].className){case'switch':this.showMode(1);break;case'prev':case'next':var dir=DPGlobal.modes[this.viewMode].navStep*(target[0].className=='prev'?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,dir);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,dir);break;}
this.fill();break;case'today':var date=new Date();date=UTCDate(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0);this.showMode(-2);var which=this.todayBtn=='linked'?null:'view';this._setDate(date,which);break;}
break;case'span':if(!target.is('.disabled')){this.viewDate.setUTCDate(1);if(target.is('.month')){var month=target.parent().find('span').index(target);this.viewDate.setUTCMonth(month);this.element.trigger({type:'changeMonth',date:this.viewDate});}else{var year=parseInt(target.text(),10)||0;this.viewDate.setUTCFullYear(year);this.element.trigger({type:'changeYear',date:this.viewDate});}
this.showMode(-1);this.fill();}
break;case'td':if(target.is('.day')&&!target.is('.disabled')){var day=parseInt(target.text(),10)||1;var year=this.viewDate.getUTCFullYear(),month=this.viewDate.getUTCMonth();if(target.is('.old')){if(month===0){month=11;year-=1;}else{month-=1;}}else if(target.is('.new')){if(month==11){month=0;year+=1;}else{month+=1;}}
this._setDate(UTCDate(year,month,day,0,0,0,0));}
break;}}},_setDate:function(date,which){if(!which||which=='date')
this.date=date;if(!which||which=='view')
this.viewDate=date;this.fill();this.setValue();this.element.trigger({type:'changeDate',date:this.date});var element;if(this.isInput){element=this.element;}else if(this.component){element=this.element.find('input');}
if(element){element.change();if(this.autoclose&&(!which||which=='date')){this.hide();}}},moveMonth:function(date,dir){if(!dir)return date;var new_date=new Date(date.valueOf()),day=new_date.getUTCDate(),month=new_date.getUTCMonth(),mag=Math.abs(dir),new_month,test;dir=dir>0?1:-1;if(mag==1){test=dir==-1?function(){return new_date.getUTCMonth()==month;}:function(){return new_date.getUTCMonth()!=new_month;};new_month=month+dir;new_date.setUTCMonth(new_month);if(new_month<0||new_month>11)
new_month=(new_month+12)%12;}else{for(var i=0;i<mag;i++)
new_date=this.moveMonth(new_date,dir);new_month=new_date.getUTCMonth();new_date.setUTCDate(day);test=function(){return new_month!=new_date.getUTCMonth();};}
while(test()){new_date.setUTCDate(--day);new_date.setUTCMonth(new_month);}
return new_date;},moveYear:function(date,dir){return this.moveMonth(date,dir*12);},dateWithinRange:function(date){return date>=this.startDate&&date<=this.endDate;},keydown:function(e){if(this.picker.is(':not(:visible)')){if(e.keyCode==27)
this.show();return;}
var dateChanged=false,dir,day,month,newDate,newViewDate;switch(e.keyCode){case 27:this.hide();e.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation)break;dir=e.keyCode==37?-1:1;if(e.ctrlKey){newDate=this.moveYear(this.date,dir);newViewDate=this.moveYear(this.viewDate,dir);}else if(e.shiftKey){newDate=this.moveMonth(this.date,dir);newViewDate=this.moveMonth(this.viewDate,dir);}else{newDate=new Date(this.date);newDate.setUTCDate(this.date.getUTCDate()+dir);newViewDate=new Date(this.viewDate);newViewDate.setUTCDate(this.viewDate.getUTCDate()+dir);}
if(this.dateWithinRange(newDate)){this.date=newDate;this.viewDate=newViewDate;this.setValue();this.update();e.preventDefault();dateChanged=true;}
break;case 38:case 40:if(!this.keyboardNavigation)break;dir=e.keyCode==38?-1:1;if(e.ctrlKey){newDate=this.moveYear(this.date,dir);newViewDate=this.moveYear(this.viewDate,dir);}else if(e.shiftKey){newDate=this.moveMonth(this.date,dir);newViewDate=this.moveMonth(this.viewDate,dir);}else{newDate=new Date(this.date);newDate.setUTCDate(this.date.getUTCDate()+dir*7);newViewDate=new Date(this.viewDate);newViewDate.setUTCDate(this.viewDate.getUTCDate()+dir*7);}
if(this.dateWithinRange(newDate)){this.date=newDate;this.viewDate=newViewDate;this.setValue();this.update();e.preventDefault();dateChanged=true;}
break;case 13:this.hide();e.preventDefault();break;case 9:this.hide();break;}
if(dateChanged){this.element.trigger({type:'changeDate',date:this.date});var element;if(this.isInput){element=this.element;}else if(this.component){element=this.element.find('input');}
if(element){element.change();}}},showMode:function(dir){if(dir){this.viewMode=Math.max(0,Math.min(2,this.viewMode+dir));}
this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).css('display','block');this.updateNavArrows();}};$.fn.datepicker=function(option){var args=Array.apply(null,arguments);args.shift();return this.each(function(){var $this=$(this),data=$this.data('datepicker'),options=typeof option=='object'&&option;if(!data){$this.data('datepicker',(data=new Datepicker(this,$.extend({},$.fn.datepicker.defaults,options))));}
if(typeof option=='string'&&typeof data[option]=='function'){data[option].apply(data,args);}});};$.fn.datepicker.defaults={};$.fn.datepicker.Constructor=Datepicker;var dates=$.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today"}};var DPGlobal={modes:[{clsName:'days',navFnc:'Month',navStep:1},{clsName:'months',navFnc:'FullYear',navStep:1},{clsName:'years',navFnc:'FullYear',navStep:10}],isLeapYear:function(year){return(((year%4===0)&&(year%100!==0))||(year%400===0))},getDaysInMonth:function(year,month){return[31,(DPGlobal.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month]},validParts:/dd?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\r]+/g,parseFormat:function(format){var separators=format.replace(this.validParts,'\0').split('\0'),parts=format.match(this.validParts);if(!separators||!separators.length||!parts||parts.length==0){throw new Error("Invalid date format.");}
return{separators:separators,parts:parts};},parseDate:function(date,format,language){if(date instanceof Date)return date;if(/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)){var part_re=/([-+]\d+)([dmwy])/,parts=date.match(/([-+]\d+)([dmwy])/g),part,dir;date=new Date();for(var i=0;i<parts.length;i++){part=part_re.exec(parts[i]);dir=parseInt(part[1]);switch(part[2]){case'd':date.setUTCDate(date.getUTCDate()+dir);break;case'm':date=Datepicker.prototype.moveMonth.call(Datepicker.prototype,date,dir);break;case'w':date.setUTCDate(date.getUTCDate()+dir*7);break;case'y':date=Datepicker.prototype.moveYear.call(Datepicker.prototype,date,dir);break;}}
return UTCDate(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),0,0,0);}
var parts=date&&date.match(this.nonpunctuation)||[],date=new Date(),parsed={},setters_order=['yyyy','yy','M','MM','m','mm','d','dd'],setters_map={yyyy:function(d,v){return d.setUTCFullYear(v);},yy:function(d,v){return d.setUTCFullYear(2000+v);},m:function(d,v){v-=1;while(v<0)v+=12;v%=12;d.setUTCMonth(v);while(d.getUTCMonth()!=v)
d.setUTCDate(d.getUTCDate()-1);return d;},d:function(d,v){return d.setUTCDate(v);}},val,filtered,part;setters_map['M']=setters_map['MM']=setters_map['mm']=setters_map['m'];setters_map['dd']=setters_map['d'];date=UTCDate(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0);if(parts.length==format.parts.length){for(var i=0,cnt=format.parts.length;i<cnt;i++){val=parseInt(parts[i],10);part=format.parts[i];if(isNaN(val)){switch(part){case'MM':filtered=$(dates[language].months).filter(function(){var m=this.slice(0,parts[i].length),p=parts[i].slice(0,m.length);return m==p;});val=$.inArray(filtered[0],dates[language].months)+1;break;case'M':filtered=$(dates[language].monthsShort).filter(function(){var m=this.slice(0,parts[i].length),p=parts[i].slice(0,m.length);return m==p;});val=$.inArray(filtered[0],dates[language].monthsShort)+1;break;}}
parsed[part]=val;}
for(var i=0,s;i<setters_order.length;i++){s=setters_order[i];if(s in parsed&&!isNaN(parsed[s]))
setters_map[s](date,parsed[s])}}
return date;},formatDate:function(date,format,language){var val={d:date.getUTCDate(),m:date.getUTCMonth()+1,M:dates[language].monthsShort[date.getUTCMonth()],MM:dates[language].months[date.getUTCMonth()],yy:date.getUTCFullYear().toString().substring(2),yyyy:date.getUTCFullYear()};val.dd=(val.d<10?'0':'')+val.d;val.mm=(val.m<10?'0':'')+val.m;var date=[],seps=$.extend([],format.separators);for(var i=0,cnt=format.parts.length;i<cnt;i++){if(seps.length)
date.push(seps.shift())
date.push(val[format.parts[i]]);}
return date.join('');},headTemplate:'<thead>'+'<tr>'+'<th class="prev"><i class="icon-arrow-left"/></th>'+'<th colspan="5" class="switch"></th>'+'<th class="next"><i class="icon-arrow-right"/></th>'+'</tr>'+'</thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};DPGlobal.template='<div class="datepicker">'+'<div class="datepicker-days">'+'<table class=" table-condensed">'+
DPGlobal.headTemplate+'<tbody></tbody>'+
DPGlobal.footTemplate+'</table>'+'</div>'+'<div class="datepicker-months">'+'<table class="table-condensed">'+
DPGlobal.headTemplate+
DPGlobal.contTemplate+
DPGlobal.footTemplate+'</table>'+'</div>'+'<div class="datepicker-years">'+'<table class="table-condensed">'+
DPGlobal.headTemplate+
DPGlobal.contTemplate+
DPGlobal.footTemplate+'</table>'+'</div>'+'</div>';$.fn.datepicker.DPGlobal=DPGlobal;}(window.jQuery);;(function($){$.fn.datepicker.dates['zh-CN']={days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六","星期日"],daysShort:["周日","周一","周二","周三","周四","周五","周六","周日"],daysMin:["日","一","二","三","四","五","六","日"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthsShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],today:"今日"};}(jQuery));(function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case"[object String]":return a==""+c;case"[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case"[object Date]":case"[object Boolean]":return+a==+c;case"[object RegExp]":return a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);