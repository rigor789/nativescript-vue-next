# [3.0.0-dev.3](https://github.com/rigor789/nativescript-vue-next/compare/v3.0.0-dev.2...v3.0.0-dev.3) (2020-09-15)



# [3.0.0-dev.2](https://github.com/rigor789/nativescript-vue-next/compare/v3.0.0-dev.1...v3.0.0-dev.2) (2020-09-15)


### Bug Fixes

* **template-blnak:** add template files to package ([3338efa](https://github.com/rigor789/nativescript-vue-next/commit/3338efafa48e524f2f7afcdef603ce5e786a538a))



# [3.0.0-dev.1](https://github.com/rigor789/nativescript-vue-next/compare/v3.0.0-dev.0...v3.0.0-dev.1) (2020-09-15)


### Features

* add blank template ([8789e8a](https://github.com/rigor789/nativescript-vue-next/commit/8789e8ac24bc57ef83862926e2e891c2688223bf))



# 3.0.0-dev.0 (2020-09-15)


### Bug Fixes

* overriding property with a getter/seter ([6184fbb](https://github.com/rigor789/nativescript-vue-next/commit/6184fbb345b3fa10df0fa723e445320430daf2ba))
* **types:** simplify runtime types ([e098519](https://github.com/rigor789/nativescript-vue-next/commit/e098519028447736f45bd17572de8bbbed67e97a))
* add global isOn for now ([377ccc0](https://github.com/rigor789/nativescript-vue-next/commit/377ccc02360d5bb4a0dd011d914c92b916509781))
* failing test ([3ec5de9](https://github.com/rigor789/nativescript-vue-next/commit/3ec5de96278aab5ff45cddea02af98dd9256704d))
* Fix some TS linter errors ([991f694](https://github.com/rigor789/nativescript-vue-next/commit/991f6943dffc86563a961bf1440f82419a9fdf69))
* remove optional chaining ([e4f4005](https://github.com/rigor789/nativescript-vue-next/commit/e4f40053c89aed80f4031bd75ab6fe5aa26dcbc4))
* ts error about missing context ([dba7b99](https://github.com/rigor789/nativescript-vue-next/commit/dba7b99fca442c6374b4b205639357cd0a670f12))
* wrong import for getRootView ([d3b9ced](https://github.com/rigor789/nativescript-vue-next/commit/d3b9ced34e46c41bc8b8731c2670282e7476f05d))
* **formatted-string:** properly add/remove spans ([3a40a9b](https://github.com/rigor789/nativescript-vue-next/commit/3a40a9b00b9f86f45600480812b154e51a5f7895)), closes [#86](https://github.com/rigor789/nativescript-vue-next/issues/86)
* getTextMode signature chage ([f309a4e](https://github.com/rigor789/nativescript-vue-next/commit/f309a4e3cff824c483dd6a974064f2898a82f6bd))
* **compiler:** adapt code to fix the breaking change coming from updating the vue-next to alpha.12 ([903fb22](https://github.com/rigor789/nativescript-vue-next/commit/903fb22d77524d7c75d3ed693d6694f5a364f01b))
* **compiler:** component/element resolution at runtime ([49b6f93](https://github.com/rigor789/nativescript-vue-next/commit/49b6f93232f2c29a024b05b1fdf07412a7f53e27))
* **runtime:** create invoker to avoid adding infinite event listeners ([9c3eb3c](https://github.com/rigor789/nativescript-vue-next/commit/9c3eb3c7ac7723660d27c272ef995bdfce703272))
* **runtime:** event names mixed case ([119b8e8](https://github.com/rigor789/nativescript-vue-next/commit/119b8e8637d7e16c03bf13296b7ee1e34fa1471e))
* **runtime:** fix removing event listener when the once modifier is used ([aa9c54a](https://github.com/rigor789/nativescript-vue-next/commit/aa9c54a94a2176ec5f9fdbec2599cd82ce8688ac))
* **runtime:** swap patchProp arguments to match alpha.9 breaking change ([ef46bdc](https://github.com/rigor789/nativescript-vue-next/commit/ef46bdc842a7fc2ad6d019111904906d39d089d9))
* **runtime:** temporarily declare css module and use require ([d045caa](https://github.com/rigor789/nativescript-vue-next/commit/d045caa17afa2e6db55f0788d6100f83b10876b1))
* cast INSVNode to NSVElement ([3cf6589](https://github.com/rigor789/nativescript-vue-next/commit/3cf65891cbc02938ce257f262f1199cc6730aad9))
* **runtime:** ts and linter issues ([#3](https://github.com/rigor789/nativescript-vue-next/issues/3)) ([8c32782](https://github.com/rigor789/nativescript-vue-next/commit/8c3278291625bfd0f89d29eefa24cbef2c50adfb))


### Features

* $navigateTo and $navigateBack ([57f1556](https://github.com/rigor789/nativescript-vue-next/commit/57f1556e420ff03932a755af0bae70242165ed81))
* add tabs and bottom nav ([7540b94](https://github.com/rigor789/nativescript-vue-next/commit/7540b945981ed08c2dc26917581f782fcd62e1f1))
* implement BottomNavigation component ([048b74b](https://github.com/rigor789/nativescript-vue-next/commit/048b74ba57909508174430e17a1a5589afa06d67))
* upgrade to NativeScript 7 ([38b5d3f](https://github.com/rigor789/nativescript-vue-next/commit/38b5d3f1f18f43f0aa1ed104846c3ad0cfe7f8aa))
* **ActionBar:** warn when not a direct child of Page ([c6f9a5e](https://github.com/rigor789/nativescript-vue-next/commit/c6f9a5e56fde156a03b3ab4b06454faed5e0b518))
* **compiler:** add initial compiler implementation ([afc7be3](https://github.com/rigor789/nativescript-vue-next/commit/afc7be3f23245955903ae5749ffc84fbe76fb1da))
* **compiler:** support vModel in templates ([4945faa](https://github.com/rigor789/nativescript-vue-next/commit/4945faa436f1ebb1f0a2c0d785a068831ac56167))
* **compiler:** transform vModel ([d051e1c](https://github.com/rigor789/nativescript-vue-next/commit/d051e1c9707332345df4632fe03b1cdfea2fba52))
* **compiler:** transform vOn ([96c93a1](https://github.com/rigor789/nativescript-vue-next/commit/96c93a10e73e45bc5b84f04d19a1a596f179aeee))
* **compiler:** transform vShow ([92021fd](https://github.com/rigor789/nativescript-vue-next/commit/92021fd316c0b4c0550e3c108dac95080a45ef83))
* **compiler:** transformStyle ([5a8d058](https://github.com/rigor789/nativescript-vue-next/commit/5a8d0588530a5bcbc9cf482b02b0857fd16d24d0))
* **compiler:** vText transform ([9832c70](https://github.com/rigor789/nativescript-vue-next/commit/9832c70768965372cb819d90ce926acf27189c09))
* **core:** initial $showModal support ([b01e418](https://github.com/rigor789/nativescript-vue-next/commit/b01e418c035579109011228b1d5acdd5a8b14644))
* **core:** initial navigation ([18852c5](https://github.com/rigor789/nativescript-vue-next/commit/18852c5415032d7fba7641aec68c5fc37b1cb38b))
* **debug:** allow setting debug category ([742f638](https://github.com/rigor789/nativescript-vue-next/commit/742f63834232481385bd51258ae7188443ca77f4))
* **ListView:** emit itemTap with 'item' ([4976309](https://github.com/rigor789/nativescript-vue-next/commit/4976309378eb081cf70caa7272d3f23e3bbcef65))
* **ListView:** initial LV implementation ([ff8b032](https://github.com/rigor789/nativescript-vue-next/commit/ff8b032441e8ed2065a02f5f051bdc1eb427d083))
* **logging:** Change some console.log sentences to the new debug() utility function ([a4def94](https://github.com/rigor789/nativescript-vue-next/commit/a4def948af4439762be332b9a4d5069d4d8f93d0))
* **logging:** enable the NS trace module in the test app so we can see all the NS-vue debug output ([01aec01](https://github.com/rigor789/nativescript-vue-next/commit/01aec0123067885f3ed4a5a52c77322871d56d54))
* **logging:** use the just implemented debug() function for logging instead of the console.log sentence ([ad2f7d2](https://github.com/rigor789/nativescript-vue-next/commit/ad2f7d2f859dc2f37fdc472b79514a6bdf6aac52))
* **modals:** improve types and add $modal.close ([aa8c8c9](https://github.com/rigor789/nativescript-vue-next/commit/aa8c8c9fc25ff5fac7b0219e2784a490be65db48))
* **registry:** add model to DataPicker ([7257f5e](https://github.com/rigor789/nativescript-vue-next/commit/7257f5ee2008ae6b2917fbdd17f5d2e798625c3a))
* **registry:** add SearchBar, SegmentedBar ([cab807f](https://github.com/rigor789/nativescript-vue-next/commit/cab807fee83fd8bfcf93732ec214ff5dbd23a7e2))
* **registry:** allow overwriting elements with a flag ([d8d1972](https://github.com/rigor789/nativescript-vue-next/commit/d8d1972284cfa93fba7f5a381ccd362c05b03663))
* **registry:** allow passing nodeOps in ViewMeta ([1ef94d1](https://github.com/rigor789/nativescript-vue-next/commit/1ef94d1e2092726cd7cfd24fda9aaa694ebd621f))
* **runtime:** add ActionBar component ([01e830f](https://github.com/rigor789/nativescript-vue-next/commit/01e830f935ea9ebd18d43147a3cbc67ba4df2649))
* **runtime:** add an example of the `once` event modifier to the test App ([09cee29](https://github.com/rigor789/nativescript-vue-next/commit/09cee29e61e1976ac890492103246c5b7e0d5300))
* **runtime:** add FormattedString and Span ([c0de02e](https://github.com/rigor789/nativescript-vue-next/commit/c0de02e072e4cf58d8f4b1565e107e25a30dd193))
* **runtime:** allow rendering to NSVRoot containers ([57ebd28](https://github.com/rigor789/nativescript-vue-next/commit/57ebd28b9a148ecdbd0b24df52bd5e78f55bd37e))
* **runtime:** better typing declarations in the patchEvent() feature ([b68f169](https://github.com/rigor789/nativescript-vue-next/commit/b68f1696a419ff775e759b33611b79434d8cc2a7))
* **runtime:** create Tabs component and improve demo app (WIP) ([188a0bf](https://github.com/rigor789/nativescript-vue-next/commit/188a0bf929d1eb7e77b3934666e9af5c78a99d69))
* **runtime:** initial tabs implementation ([073a507](https://github.com/rigor789/nativescript-vue-next/commit/073a507da5cf27e56ccf497fa5455a4b92a01e53))
* better error message when overwriting element ([e3dee20](https://github.com/rigor789/nativescript-vue-next/commit/e3dee20f3c77743f23a90d62278fb69752805cb5))
* **runtime:** Basic implementation of the patchEvent() function ([730d416](https://github.com/rigor789/nativescript-vue-next/commit/730d416e20dcc109a0cd284cebcb94b2800f8426))
* **runtime:** component TextInput implemented with v-model support ([7517ac8](https://github.com/rigor789/nativescript-vue-next/commit/7517ac800d8345791d07cd3e67d1c6517cbc04e2))
* **runtime:** Do not use fromAstNodes() function as it import a lot of stuff which make tests more complicated ([0fb09f8](https://github.com/rigor789/nativescript-vue-next/commit/0fb09f8513844812c689d06dcba4bfbe7b93fecf))
* **runtime:** extract patchAttr and add tests ([3f4ad35](https://github.com/rigor789/nativescript-vue-next/commit/3f4ad3593899fef000d5c24381770642fd89256a))
* **runtime:** handle content views and regular views in node ops ([6a74537](https://github.com/rigor789/nativescript-vue-next/commit/6a7453710f7dbcc2bc1e3938b7067da38192d6a3))
* **runtime:** implement ActionBar nodeOps ([23cf804](https://github.com/rigor789/nativescript-vue-next/commit/23cf804456dbf9a1c78661974b576cfc3241737e))
* **runtime:** mark element types with flags ([84e2e62](https://github.com/rigor789/nativescript-vue-next/commit/84e2e626ba2dddfecc728bc8d63732d0d74b80e7))
* **runtime:** navigate frame when inserting child page ([2037801](https://github.com/rigor789/nativescript-vue-next/commit/2037801f10465741bb9b6e24eeaa96da88fc3ef6))
* **runtime:** patch props including support for android: and ios: prefixes ([2b9ab95](https://github.com/rigor789/nativescript-vue-next/commit/2b9ab95f814a9a483599d2d9c706b153295f5e04))
* **runtime:** patchClass implementation ([#6](https://github.com/rigor789/nativescript-vue-next/issues/6)) ([d89a274](https://github.com/rigor789/nativescript-vue-next/commit/d89a27424303700fc615a44820e29045ef4fef9e))
* **runtime:** patchStyle implementation ([#9](https://github.com/rigor789/nativescript-vue-next/issues/9)) ([116ca2d](https://github.com/rigor789/nativescript-vue-next/commit/116ca2d824698595831422b4dad1956999479265))
* **runtime:** register more built-in elements ([1ea0c3d](https://github.com/rigor789/nativescript-vue-next/commit/1ea0c3df1ca247aa2528341bbe99c68b86145a4a))
* **runtime:** render text nodes ([6cc79a1](https://github.com/rigor789/nativescript-vue-next/commit/6cc79a13177b52e2b75e61160c1443013673d9eb))
* **runtime:** set text attribute to NS views when the last element is a text node ([8c8b4aa](https://github.com/rigor789/nativescript-vue-next/commit/8c8b4aa1de6d8bcd0e33293f7728dc8001e7a660))
* **runtime:** support for event with options. Implement the `once` event modifier ([728b6e1](https://github.com/rigor789/nativescript-vue-next/commit/728b6e18fb20396c19f3e0b6019d47fd2aad6317))
* **runtime:** use set/unset-value for nested paths ([c46518f](https://github.com/rigor789/nativescript-vue-next/commit/c46518f70258039ef3f53820b7a071f62720e7c3))
* **runtime:** v-model directive ([cd84b57](https://github.com/rigor789/nativescript-vue-next/commit/cd84b57d7bee2f76924b785070b960db9351dcdc))
* **shared:** new @nativescript-vue/shared package, with a debug() function ([17b9263](https://github.com/rigor789/nativescript-vue-next/commit/17b92639cb5977c46a4ad62d5e728458e29eed13))
* **vShow:** add runtime directive for vShow ([d88237d](https://github.com/rigor789/nativescript-vue-next/commit/d88237d967588b95f44418e8eed09a33dc3d8be7))
* add more core elements, implement insert (wip) ([a68fe76](https://github.com/rigor789/nativescript-vue-next/commit/a68fe768f05bb9ad8efe0dd08178d2660df3bf8b))
* clean up nodeOps (WIP) ([eadc363](https://github.com/rigor789/nativescript-vue-next/commit/eadc363794ed1dd1898cd024bf0f8d70c9ce625a))
* implement nativescript-vue package ([d16657c](https://github.com/rigor789/nativescript-vue-next/commit/d16657cd5c758a9336b572482d1e775dc371f3fd))
* **test-app:** add reactivity to test app ([aa771c1](https://github.com/rigor789/nativescript-vue-next/commit/aa771c1d30ab0079ee699cfa28cac3b1b3a945ee))
* initial element registry + native view creation ([81e88aa](https://github.com/rigor789/nativescript-vue-next/commit/81e88aae9934ea884a25cbc3b9a353c255c044e3))


### Reverts

* Revert "chore(tslinter): make tslinters and probably tests happy" ([297a2c8](https://github.com/rigor789/nativescript-vue-next/commit/297a2c8c8f70485c4140c732cc4a245225fbdd8f))



