webpackJsonp([1,5],{730:function(e,t,r){"use strict";var n=r(0),o=r(116),i=r(395),s=r(393),a=r(731),c=r(734),u=r(743);r.d(t,"UsersModule",function(){return d});var f=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(){}return e=f([r.i(n.v)({imports:[o.b,i.c,s.b,i.d,u.a],exports:[],declarations:[u.b],providers:[a.a,c.a]}),l("design:paramtypes",[])],e)}()},731:function(e,t,r){"use strict";var n=r(0),o=r(393);r.d(t,"a",function(){return a});var i=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(e){this._http=e,this._url="https://jsonplaceholder.typicode.com/users"}return e.prototype.getAllUsers=function(){return this._http.get(this._url).map(function(e){return e.json()})},e.prototype.createUser=function(e){return this._http.post(this._url,e).map(function(e){return e.json()})},e.prototype.getOneUser=function(e){return this._http.get(this._url+"/"+e).map(function(e){return e.json()})},e.prototype.editUser=function(e,t){return this._http.put(this._url+"/"+t,e).map(function(e){return e.json()})},e.prototype.deleteUser=function(e){return this._http.delete(this._url+"/"+e).map(function(e){return e.json()})},e=i([r.i(n.c)(),s("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.a&&o.a)&&t||Object])],e);var t}()},734:function(e,t,r){"use strict";var n=r(0);r.d(t,"a",function(){return s});var o=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return e.prototype.canDeactivate=function(e){return!e.newUserForm.dirty||confirm("Are you sure to dicard unsaved changed?")},e=o([r.i(n.c)(),i("design:paramtypes",[])],e)}()},741:function(e,t,r){"use strict";var n=r(0),o=r(395),i=r(745),s=r(731),a=r(394),c=r(742);r.d(t,"a",function(){return l});var u=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t,r,n){this._fb=e,this._userService=t,this._router=r,this._activatedRoute=n,this.user=new c.a,this.newUserForm=this._fb.group({name:["",o.a.required],email:["",i.a.emailPattern],phone:[],address:this._fb.group({street:"",suite:"",city:"",zipcode:""})})}return e.prototype.save=function(){var e=this;this.id?this._userService.editUser(this.newUserForm.value,this.id).subscribe(function(t){console.log(t),e.newUserForm.reset(),e._router.navigate(["users"])}):this._userService.createUser(this.newUserForm.value).subscribe(function(t){console.log(t),e.newUserForm.reset(),e._router.navigate(["users"])})},e.prototype.ngOnInit=function(){var e=this;this._activatedRoute.params.subscribe(function(t){e.id=t.id}),this.title=this.id?"Edit User ":"New User",this.id&&this._userService.getOneUser(this.id).subscribe(function(t){return e.user=t},function(t){404==t.status&&e._router.navigate(["NotFound"])})},e=u([r.i(n._3)({selector:"new-user",template:r(756),styles:[r(750)]}),f("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.b&&o.b)&&t||Object,"function"==typeof(l="undefined"!=typeof s.a&&s.a)&&l||Object,"function"==typeof(d="undefined"!=typeof a.a&&a.a)&&d||Object,"function"==typeof(p="undefined"!=typeof a.b&&a.b)&&p||Object])],e);var t,l,d,p}()},742:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(){function e(){this.address=new o}return e}(),o=function(){function e(){}return e}()},743:function(e,t,r){"use strict";var n=r(0),o=r(394),i=r(744),s=r(741),a=r(734);r.d(t,"a",function(){return l}),r.d(t,"b",function(){return d});var c=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=[{path:"",component:i.a},{path:"new",component:s.a,canDeactivate:[a.a]},{path:":id",component:s.a}],l=function(){function e(){}return e=c([r.i(n.v)({imports:[o.c.forChild(f)],exports:[o.c]}),u("design:paramtypes",[])],e)}(),d=[i.a,s.a]},744:function(e,t,r){"use strict";var n=r(0),o=r(731);r.d(t,"a",function(){return a});var i=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(e){this._usersservice=e}return e.prototype.delete=function(e){var t=this;confirm("Are you sure you want to delete "+e.name+"?")&&this._usersservice.deleteUser(e.id).subscribe(function(r){var n=t.users.indexOf(e);t.users.splice(n,1)},function(e){return console.log(e)})},e.prototype.ngOnInit=function(){var e=this;this._usersservice.getAllUsers().subscribe(function(t){e.users=t})},e=i([r.i(n._3)({selector:"users",template:r(757),styles:[r(751)]}),s("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.a&&o.a)&&t||Object])],e);var t}()},745:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(){function e(){}return e.emailPattern=function(e){var t=new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");return t.test(e.value)?null:{emailPatern:!0}},e}()},750:function(e,t){e.exports=""},751:function(e,t){e.exports=".add-user-button{\r\n    margin-bottom:20px;\r\n}\r\n\r\n.clickable{\r\n    cursor:pointer;\r\n}"},756:function(e,t){e.exports='<h1>{{title}}</h1>\r\n\r\n<form action="" class="col-sm-8 col-md-8 " [formGroup]="newUserForm" (ngSubmit)="save()" novalidate>\r\n    <div class="form-group">\r\n        <label for="name">Name</label>\r\n        <input type="text" [(ngModel)]="user.name" id="name" class="form-control" formControlName="name">\r\n        <div *ngIf="newUserForm.controls.name.touched && newUserForm.controls.name.errors">\r\n            <div *ngIf="newUserForm.controls.name.errors?.required" class="alert alert-danger">Username is required\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label for="email">Email</label>\r\n        <input type="email" [(ngModel)]="user.email" id="email" class="form-control" formControlName="email">\r\n        <div *ngIf="newUserForm.controls.email.touched && newUserForm.controls.email.errors">\r\n            <div *ngIf="newUserForm.controls.email.errors?.emailPatern" class="alert alert-danger">Please Enter Valid Email\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="form-group">\r\n        <label for="phone">Phone</label>\r\n        <input type="text" [(ngModel)]="user.phone" id="phone" class="form-control" formControlName="phone">\r\n    </div>\r\n    <fieldset class="form-group" formGroupName="address">\r\n        <legend>Address</legend>\r\n\r\n        <div class="form-group">\r\n            <label for="street">Street</label>\r\n            <input type="text" [(ngModel)]="user.address.street" id="street" class="form-control" formControlName="street">\r\n        </div>\r\n        <div class="form-group">\r\n            <label for="suite">Suite</label>\r\n            <input type="text" [(ngModel)]="user.address.suite" id="suite" class="form-control" formControlName="suite">\r\n        </div>\r\n        <div class="form-group">\r\n            <label for="city">City</label>\r\n            <input type="text" [(ngModel)]="user.address.city" id="city" class="form-control" formControlName="city">\r\n        </div>\r\n        <div class="form-group">\r\n            <label for="zip">ZipCode</label>\r\n            <input type="text" [(ngModel)]="user.address.zipcode" id="zipcode" class="form-control" formControlName="zipcode">\r\n        </div>\r\n\r\n    </fieldset>\r\n    <button class="btn btn-primary" type="submit">Save</button>\r\n</form>'},757:function(e,t){e.exports='<a class="btn btn-primary add-user-button" role="button" [routerLink]="[\'/users/new\']">Add User</a>\r\n\r\n<table class="table table-bordered">\r\n    <thead>\r\n        <tr>\r\n            <th>Index</th>\r\n            <th>User</th>\r\n            <th>Email</th>\r\n            <th>Edit</th>\r\n            <th>Delete</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor="let user of users, let i = index">\r\n            <td>{{i+1}}</td>\r\n            <td>{{user.name}}</td>\r\n            <td>{{user.email}}</td>\r\n            <td><i class="glyphicon glyphicon-edit" [routerLink]="[\'/users\',user.id]"></i></td>\r\n            <td><i class="glyphicon glyphicon-remove clickable" (click)="delete(user)"></i></td>\r\n        </tr>\r\n    </tbody>\r\n</table>'}});
//# sourceMappingURL=1.069e27c2dc342427d7cc.bundle.map