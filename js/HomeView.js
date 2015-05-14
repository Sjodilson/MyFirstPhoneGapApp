var HomeView = function (store) {
		this.template = Handlebars.compile($("#home-tpl").html());
		//this.liTemplate = Handlebars.compile($("#employee-li-tpl").html());
	    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
    };
    
    this.render = function() {
	    this.el.html(this.template());
	    return this;
	};
	
	
	this.findByName = function() {
    store.findByName($('.search-key').val(), function(employees) {
    	liTemplate = Handlebars.compile($("#employee-li-tpl").html());
        $('.employee-list').html(liTemplate(employees));
        if (self.iscroll) {
            console.log('Refresh iScroll');
            self.iscroll.refresh();
        } else {
            console.log('New iScroll');
            self.iscroll = new iScroll($('.scroll', self.el)[0], {hScrollbar: false, vScrollbar: false });
        }
    });
};
	
 
    this.initialize();
  
};

