describe('controller', function () {
    'use strict';

    var subject, model, view;

    beforeEach(function() {
      model = jasmine.createSpyObj('model', ['saveStamp', 'getAllStamps']);
      view = jasmine.createSpyObj('view', ['renderInvalidCode', 'renderValidCode', 'renderStamps','bind']);
      subject = new app.Controller(model, view);
    });

    it('should display all stamps on start up', function () {
      var stamps = [true, true, false, false, false];

      model.getAllStamps.and.callFake(function (callback) {
        callback(stamps);
      });

      subject.showAllStamps();

      expect(view.renderStamps).toHaveBeenCalledWith(stamps);
    });

    it('should render error if no stamp for supplied code', function() {
      model.saveStamp.and.callFake(function (stampCode, callback){
        callback(false);
      });

      subject.submitStampCode(1111);

      expect(view.renderInvalidCode).toHaveBeenCalled();
    });

    it('should render success if stamp for supplied code', function() {
      model.saveStamp.and.callFake(function (stampCode, callback){
        callback(true);
      });

      subject.submitStampCode(1453);

      expect(view.renderValidCode).toHaveBeenCalled();
    });
});
