"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2443],{266047:function(c,o,t){t.r(o);var m=t(502143),h=t(968521),g=t(720719),Z=t(28840),i=t(759907),a=t(828089),p=t(825673),E=t(902068),v=t(574399),P=t(863942),x=t(316073),M=t(24628),D=t(719260),O=t(956140),d=t(127179),T=t(905388),f=t(104979),C=t(606965),I=t(268696),_=t(424128),A=t(249706),b=t(795127),B=t(116846),L=t(73024),s=t(606641),r=t(667294),n=t(370917);function l(){var u=(0,s.eL)(),e=u.texts;return(0,n.tZ)(s.dY,null,(0,n.tZ)(r.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,e[1].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(s.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"basic",filename:"components/app/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.1.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.16.0","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>Static method for <code>message</code>, <code>notification</code>, <code>modal</code>.</p>"}}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"how-to-use"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"How to use"),(0,n.tZ)("h3",{id:"basic-usage"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Basic usage"),(0,n.tZ)("p",null,e[2].value,(0,n.tZ)("code",null,e[3].value),e[4].value),(0,n.tZ)(i.Z,{lang:"tsx"},e[5].value),(0,n.tZ)("p",null,e[6].value),(0,n.tZ)("h3",{id:"sequence-with-configprovider"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-with-configprovider",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Sequence with ConfigProvider"),(0,n.tZ)("p",null,e[7].value,(0,n.tZ)("code",null,e[8].value),e[9].value),(0,n.tZ)(i.Z,{lang:"tsx"},e[10].value),(0,n.tZ)("h3",{id:"embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Embedded usage scenarios (if not necessary, try not to do nesting)"),(0,n.tZ)(i.Z,{lang:"tsx"},e[11].value),(0,n.tZ)("h3",{id:"global-scene-redux-scene"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#global-scene-redux-scene",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Global scene (redux scene)"),(0,n.tZ)(i.Z,{lang:"tsx"},e[12].value),(0,n.tZ)(i.Z,{lang:"tsx"},e[13].value),(0,n.tZ)("h2",{id:"api"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"app"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#app",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"App"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[14].value),(0,n.tZ)("th",null,e[15].value),(0,n.tZ)("th",null,e[16].value),(0,n.tZ)("th",null,e[17].value),(0,n.tZ)("th",null,e[18].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,(0,n.tZ)(_.Z,{to:"/components/message/#messageconfig",sourceType:"Link"},e[21].value)),(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null,e[23].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,(0,n.tZ)(_.Z,{to:"/components/notification/#notificationconfig",sourceType:"Link"},e[26].value)),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null,e[28].value)))),(0,n.tZ)("h2",{id:"design-token"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,n.tZ)(d.Z,{component:"App"})))}o.default=l}}]);
