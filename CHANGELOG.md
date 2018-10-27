# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="4.0.0-beta.25"></a>
# [4.0.0-beta.25](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.24...v4.0.0-beta.25) (2018-10-15)


### Bug Fixes

* **Jenkins:** Updated Jenkins file ([a7aacd6](https://github.com/ImageWare/admin-portal/commit/a7aacd6))



<a name="4.0.0-beta.24"></a>
# [4.0.0-beta.24](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.23...v4.0.0-beta.24) (2018-10-15)


### Bug Fixes

* **favicon:** Fixed missing favicons ([2e03dbe](https://github.com/ImageWare/admin-portal/commit/2e03dbe))



<a name="4.0.0-beta.23"></a>
# [4.0.0-beta.23](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.22...v4.0.0-beta.23) (2018-10-15)


### Bug Fixes

* **lint:** Fixed linter errors ([5a7c95c](https://github.com/ImageWare/admin-portal/commit/5a7c95c))



<a name="4.0.0-beta.22"></a>
# [4.0.0-beta.22](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.21...v4.0.0-beta.22) (2018-10-15)



<a name="4.0.0-beta.21"></a>
# [4.0.0-beta.21](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.20...v4.0.0-beta.21) (2018-10-11)


### Bug Fixes

* **AP-658:** Fixes enroll/verify counts missing ([4db5062](https://github.com/ImageWare/admin-portal/commit/4db5062))
* **AP-659:** Updated v-select components to use v-bind instead of :label so that validation works properly ([b066eb3](https://github.com/ImageWare/admin-portal/commit/b066eb3))
* **AP-660:** A tenant is now loaded on login and server -> oauth/client sets tenant if its not set. ([fc2efb1](https://github.com/ImageWare/admin-portal/commit/fc2efb1))
* **AP-661:** Tenant -> Alert Templates always sets the first App (in the table) by default when you load the component ([803c287](https://github.com/ImageWare/admin-portal/commit/803c287))
* **AP-667:** Fixed JavaScript error in performance vuex store. ([7951002](https://github.com/ImageWare/admin-portal/commit/7951002))


### Features

* **AP-662:** Added short cut keys for new, save, delete and cancel ([4ba44ea](https://github.com/ImageWare/admin-portal/commit/4ba44ea))



<a name="4.0.0-beta.20"></a>
# [4.0.0-beta.20](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.19...v4.0.0-beta.20) (2018-10-03)


### Bug Fixes

* Fixed a bug where clicking New would not allow form entry (multiple components) ([26da703](https://github.com/ImageWare/admin-portal/commit/26da703))



<a name="4.0.0-beta.19"></a>
# [4.0.0-beta.19](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.18...v4.0.0-beta.19) (2018-10-03)


### Features

* **GS-506:** Removed palml/palmr in favor of just palm ([6ab4ea3](https://github.com/ImageWare/admin-portal/commit/6ab4ea3))



<a name="4.0.0-beta.18"></a>
# [4.0.0-beta.18](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.17...v4.0.0-beta.18) (2018-10-03)


### Features

* **COS-88:** You can now specify #verify's per test, all biometrics are available to enroll/verify and TPS is calculated. ([a038f76](https://github.com/ImageWare/admin-portal/commit/a038f76))



<a name="4.0.0-beta.17"></a>
# [4.0.0-beta.17](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.16...v4.0.0-beta.17) (2018-09-27)


### Features

* Added more data to performance chart, added download capability ([6d182da](https://github.com/ImageWare/admin-portal/commit/6d182da))



<a name="4.0.0-beta.16"></a>
# [4.0.0-beta.16](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.15...v4.0.0-beta.16) (2018-09-26)


### Bug Fixes

* **AP-655:** Fixed JavaScript error when a tenant is missing its "name". Added unit test for this case. ([672c537](https://github.com/ImageWare/admin-portal/commit/672c537))
* **AP-656:** Fixes creating users on a tenant where the user already exists. ([332631d](https://github.com/ImageWare/admin-portal/commit/332631d))
* **e2e test:** Fixed nightwatch e2e test ([a520ad6](https://github.com/ImageWare/admin-portal/commit/a520ad6))



<a name="4.0.0-beta.15"></a>
# [4.0.0-beta.15](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.14...v4.0.0-beta.15) (2018-09-21)


### Bug Fixes

* **performance:** Fixed a bug that would incorrectly time api calls. ([67fd3ef](https://github.com/ImageWare/admin-portal/commit/67fd3ef))



<a name="4.0.0-beta.14"></a>
# [4.0.0-beta.14](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.13...v4.0.0-beta.14) (2018-09-12)


### Bug Fixes

* **infinite loop:** Fixed infinite loop when clicking on tenant table rows too quickly. ([594ba05](https://github.com/ImageWare/admin-portal/commit/594ba05))
* **performance_chart:** Updated performance section to match design tweak by Eden ([b19f584](https://github.com/ImageWare/admin-portal/commit/b19f584))


### Features

* **Performance:** Created a performance section which smoke tests creating a tenant, application, a person, then enrolls and verifies them. ([56952a4](https://github.com/ImageWare/admin-portal/commit/56952a4))



<a name="4.0.0-beta.13"></a>
# [4.0.0-beta.13](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.12...v4.0.0-beta.13) (2018-08-29)


### Bug Fixes

* **AP-650:** Reworked docker configuration ([e3aec74](https://github.com/ImageWare/admin-portal/commit/e3aec74))



<a name="4.0.0-beta.13"></a>
# [4.0.0-beta.13](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.12...v4.0.0-beta.13) (2018-08-29)


### Bug Fixes

* **AP-650:** Reworked docker configuration ([e3aec74](https://github.com/ImageWare/admin-portal/commit/e3aec74))



<a name="4.0.0-beta.12"></a>
# [4.0.0-beta.12](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.11...v4.0.0-beta.12) (2018-08-28)


### Features

* **AP-650:** Moved Admin Portal back to build time configuration. Now using Alpine Linux for Docker image. ([fb0985c](https://github.com/ImageWare/admin-portal/commit/fb0985c))



<a name="4.0.0-beta.11"></a>
# [4.0.0-beta.11](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.10...v4.0.0-beta.11) (2018-08-23)


### Bug Fixes

* **Build:** Missing Jest build junit coverage ([53e6ad0](https://github.com/ImageWare/admin-portal/commit/53e6ad0))



<a name="4.0.0-beta.10"></a>
# [4.0.0-beta.10](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.9...v4.0.0-beta.10) (2018-08-23)


### Bug Fixes

* **Linting:** Fixed Linting errors ([566724b](https://github.com/ImageWare/admin-portal/commit/566724b))



<a name="4.0.0-beta.9"></a>
# [4.0.0-beta.9](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.8...v4.0.0-beta.9) (2018-08-23)


### Bug Fixes

* **AP-649:** Increased code coverage by 10% ([2c9f3c9](https://github.com/ImageWare/admin-portal/commit/2c9f3c9))



<a name="4.0.0-beta.8"></a>
# [4.0.0-beta.8](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.7...v4.0.0-beta.8) (2018-08-22)


### Features

* **Jenkins/Email:** Along with Slack message an email notification is sent to gomobile-interactive-dev@iwsinc.com ([808a811](https://github.com/ImageWare/admin-portal/commit/808a811))



<a name="4.0.0-beta.7"></a>
# [4.0.0-beta.7](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.6...v4.0.0-beta.7) (2018-08-22)


### Bug Fixes

* **Jenkins:** Fixed duplicate slack notifications after Jenkins build ([40bdc66](https://github.com/ImageWare/admin-portal/commit/40bdc66))



<a name="4.0.0-beta.6"></a>
# [4.0.0-beta.6](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.5...v4.0.0-beta.6) (2018-08-22)


### Bug Fixes

* **AP-628:** Details are disabled until a valid item is selected. ([9a7118a](https://github.com/ImageWare/admin-portal/commit/9a7118a))
* **AP-629:** Tenant/Application select now auto select if there is only a single element available ([bf464ca](https://github.com/ImageWare/admin-portal/commit/bf464ca))
* **AP-633:** Tenant biometrics can only be changed when specifically enabled by user ([84afdc6](https://github.com/ImageWare/admin-portal/commit/84afdc6))
* **AP-634:** Added in Status to System Info ([2bbcacf](https://github.com/ImageWare/admin-portal/commit/2bbcacf))
* **AP-635:** PIN now shows on User -> Enrollments page. ([1c8d156](https://github.com/ImageWare/admin-portal/commit/1c8d156))
* **AP-636:** Fixed Send Quick Alert ([3278ead](https://github.com/ImageWare/admin-portal/commit/3278ead))
* **AP-637:** Sorted all of the datastores ([a1d8349](https://github.com/ImageWare/admin-portal/commit/a1d8349))
* **AP-638:** Footer now displays on sign in page ([a3a29f8](https://github.com/ImageWare/admin-portal/commit/a3a29f8))
* **AP-639:** Minimum width of Tenant Select moved to 400px ([d01ecfe](https://github.com/ImageWare/admin-portal/commit/d01ecfe))
* **AP-640:** Send Enrollment now only shows "Palm" once ([1877c76](https://github.com/ImageWare/admin-portal/commit/1877c76))
* **AP-641:** Fixed Tenant Admin/Maintainer issues introduced with Liveness ([485c5af](https://github.com/ImageWare/admin-portal/commit/485c5af))
* **AP-642:** Added hover text to Action Speed Dial component ([7343d9c](https://github.com/ImageWare/admin-portal/commit/7343d9c))
* **AP-643:** Fixes multiple unit test errors introduced in the latest series of changes. ([5279aaf](https://github.com/ImageWare/admin-portal/commit/5279aaf))
* **AP-644:** User -> Alerts are now properly displaying the correct data ([41475b3](https://github.com/ImageWare/admin-portal/commit/41475b3))
* **AP-647:** Table clicks now scroll the window to the top. Also added pointer as a TR hover. ([0d79990](https://github.com/ImageWare/admin-portal/commit/0d79990))
* **AP-648:** Fixed incorrect icon displayed for palm enrollments ([5b7f90a](https://github.com/ImageWare/admin-portal/commit/5b7f90a))
* **Jenkins:** Jenkins now automatically sends a slack message to the admin-portal Channel ([cfe8393](https://github.com/ImageWare/admin-portal/commit/cfe8393))


### Features

* **AP-630:** Added speed dial -> Send to User -> Alerts, replacing button ([a10b8f1](https://github.com/ImageWare/admin-portal/commit/a10b8f1))
* **AP-632:** Switching the Tenant Select now reactively changes contents ([02ca0ef](https://github.com/ImageWare/admin-portal/commit/02ca0ef))
* **AP-645:** Added default sorts and updated alerts to be descending by date ([dfca502](https://github.com/ImageWare/admin-portal/commit/dfca502))
* **AP-646:** Added refresh icon to all tables ([3a90a61](https://github.com/ImageWare/admin-portal/commit/3a90a61))



<a name="4.0.0-beta.5"></a>
# [4.0.0-beta.5](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.4...v4.0.0-beta.5) (2018-08-13)


### Bug Fixes

* **Docker runtime:** Docker has been once again changed back to runtime ([8628a6b](https://github.com/ImageWare/admin-portal/commit/8628a6b))
* **Docker/Openshift:** Fixed Dockerfile to work with openshift. Also reduced css size ([05fe97d](https://github.com/ImageWare/admin-portal/commit/05fe97d))
* **Openshift perms:** Updated Dockerfile for correct openshift permissions ([8c40118](https://github.com/ImageWare/admin-portal/commit/8c40118))



<a name="4.0.0-beta.4"></a>
# [4.0.0-beta.4](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.3...v4.0.0-beta.4) (2018-08-13)


### Bug Fixes

* **Updated Vuetify:** Updated Vuetify and added background colors to visualize an unselected tenant ([41cb7b8](https://github.com/ImageWare/admin-portal/commit/41cb7b8))



<a name="4.0.0-beta.3"></a>
# [4.0.0-beta.3](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.2...v4.0.0-beta.3) (2018-08-11)



<a name="4.0.0-beta.2"></a>
# [4.0.0-beta.2](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.1...v4.0.0-beta.2) (2018-08-10)


### Bug Fixes

* **missing junit report:** Fixed missing code coverage ([145cd69](https://github.com/ImageWare/admin-portal/commit/145cd69))



<a name="4.0.0-beta.1"></a>
# [4.0.0-beta.1](https://github.com/ImageWare/admin-portal/compare/v4.0.0-beta.0...v4.0.0-beta.1) (2018-08-10)



<a name="4.0.0-beta.0"></a>
# [4.0.0-beta.0](https://github.com/ImageWare/admin-portal/compare/v4.0.0-alpha.4...v4.0.0-beta.0) (2018-08-10)



<a name="4.0.0-alpha.4"></a>
# [4.0.0-alpha.4](https://github.com/ImageWare/admin-portal/compare/v4.0.0-alpha.3...v4.0.0-alpha.4) (2018-06-06)


### Bug Fixes

* Application Select now properly displays applications for the selected tenant ([f2681c4](https://github.com/ImageWare/admin-portal/commit/f2681c4))



<a name="4.0.0-alpha.3"></a>
# [4.0.0-alpha.3](https://github.com/ImageWare/admin-portal/compare/v4.0.0-alpha.2...v4.0.0-alpha.3) (2018-06-01)


### Bug Fixes

* **AP-596:** Make Enterprise Suite default oauth client be a Tenant ([d15a758](https://github.com/ImageWare/admin-portal/commit/d15a758))



<a name="4.0.0-alpha.2"></a>
# [4.0.0-alpha.2](https://github.com/ImageWare/admin-portal/compare/v4.0.0-alpha.1...v4.0.0-alpha.2) (2018-06-01)


### Bug Fixes

* **AP-606:** The Admin Portal now works with Red Rock Palm and Facetec ([8b2e9e7](https://github.com/ImageWare/admin-portal/commit/8b2e9e7))



<a name="4.0.0-alpha.1"></a>
# [4.0.0-alpha.1](https://github.com/ImageWare/admin-portal/compare/v4.0.0-alpha.0...v4.0.0-alpha.1) (2018-05-31)



<a name="4.0.0-alpha.0"></a>
# 4.0.0-alpha.0 (2018-05-22)


### Bug Fixes

* **AP-596:** Make the Enterprise oAuth client a Tenant Admin by default ([8f71dbb](https://github.com/ImageWare/admin-portal/commit/8f71dbb))
* **AP-597:** Sonar code duplication eliminated ([347e2cf](https://github.com/ImageWare/admin-portal/commit/347e2cf))
* **AP-599:** Fixed errors and state issues with the Send Quick Alert ([d92d362](https://github.com/ImageWare/admin-portal/commit/d92d362))
* **AP-601:** Admin Portal Enterprise oAuth client should be set back to ([688a510](https://github.com/ImageWare/admin-portal/commit/688a510))
* **Secret:** Adding ability to have the oauth client secret used by rpm ([5bb22c3](https://github.com/ImageWare/admin-portal/commit/5bb22c3))


### Features

* **AP-600:** Users can now change their password inside Admin Portal ([f3db855](https://github.com/ImageWare/admin-portal/commit/f3db855))
* **AP-602:** Increased unit test coverage to ~35% ([fa48d5a](https://github.com/ImageWare/admin-portal/commit/fa48d5a))
* **Jenkins Integration:** Jenkins build can be trigger in release ([deb28e8](https://github.com/ImageWare/admin-portal/commit/deb28e8))
* **Versioning:** Initial commit for versioning my project ([da71b8c](https://github.com/ImageWare/admin-portal/commit/da71b8c))


### BREAKING CHANGES

* **New Version:** This should bump the version
