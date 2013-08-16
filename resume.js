if (Meteor.isClient) {
  Meteor.startup(function () {

    $('.progress').on('mouseenter', function (e) { 
      var id = e.target.id? e.target.id : e.target.firstElementChild.id;
      if (rl.tooltip[id]) {
        $(this).tooltip({ title: rl.tooltip[id]});
        $(this).tooltip('show');
      } 
    })

    $('.icon-print').on('click', function(e) {
      window.print();
    })

    rl = {}
    rl.tooltip = {
      jscript: "JQuery, Underscore, Knockout, Require, Meteor, Angular (Work in Progress). Strong understanding of the language and standards.",
      python: "First language learned, used Flask and Google App Engine.",
      csharp: "ASP.NET (MVC, Razor, Web API, Entity Framework, Web Forms), Nancy, Simple.Data.",
      sql: "Very comfortable with CRUD (Create, Read, Update, Delete) operations, and general database maintenance.",
      vb: 'lol'
    };
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
