Template[getTemplate('postInfo')].helpers({
  pointsUnitDisplayText: function(){
    return this.upvotes == 1 ? i18n.t('upvote') : i18n.t('upvotes');
  },
  getTemplate: function() {
    return getTemplate("postAuthor");
  }
});