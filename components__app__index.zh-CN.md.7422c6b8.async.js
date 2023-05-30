"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8288],{413111:function(c,a,t){t.r(a);var m=t(502143),h=t(968521),E=t(720719),Z=t(28840),i=t(759907),o=t(828089),g=t(825673),p=t(902068),v=t(574399),D=t(863942),P=t(316073),x=t(24628),M=t(719260),C=t(956140),s=t(127179),O=t(905388),A=t(104979),T=t(606965),f=t(268696),_=t(424128),I=t(249706),B=t(795127),F=t(116846),L=t(73024),u=t(606641),l=t(667294),n=t(370917);function d(){var r=(0,u.eL)(),e=r.texts;return(0,n.tZ)(u.dY,null,(0,n.tZ)(l.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[1].value,(0,n.tZ)("code",null,e[2].value),e[3].value,(0,n.tZ)("code",null,e[4].value),e[5].value,(0,n.tZ)("code",null,e[6].value),e[7].value,(0,n.tZ)("code",null,e[8].value),e[9].value),(0,n.tZ)("li",null,e[10].value,(0,n.tZ)("code",null,e[11].value),e[12].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(u.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/app/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.1.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.16.0","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { App, Button, Space } from 'antd';

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
`,description:"<p>\u83B7\u53D6 <code>message</code>, <code>notification</code>, <code>modal</code> \u9759\u6001\u65B9\u6CD5\u3002</p>"}}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"\u5982\u4F55\u4F7F\u7528"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u4F7F\u7528",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),(0,n.tZ)("h3",{id:"\u57FA\u7840\u7528\u6CD5"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u57FA\u7840\u7528\u6CD5"),(0,n.tZ)("p",null,e[13].value,(0,n.tZ)("code",null,e[14].value),e[15].value),(0,n.tZ)(i.Z,{lang:"tsx"},e[16].value),(0,n.tZ)("p",null,e[17].value),(0,n.tZ)("h3",{id:"\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4E0E ConfigProvider \u5148\u540E\u987A\u5E8F"),(0,n.tZ)("p",null,e[18].value,(0,n.tZ)("code",null,e[19].value),e[20].value),(0,n.tZ)(i.Z,{lang:"tsx"},e[21].value),(0,n.tZ)("h3",{id:"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\uFF08\u5982\u65E0\u5FC5\u8981\uFF0C\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957\uFF09"),(0,n.tZ)(i.Z,{lang:"tsx"},e[22].value),(0,n.tZ)("h3",{id:"\u5168\u5C40\u573A\u666Fredux-\u573A\u666F"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5168\u5C40\u573A\u666Fredux-\u573A\u666F",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5168\u5C40\u573A\u666F\uFF08redux \u573A\u666F\uFF09"),(0,n.tZ)(i.Z,{lang:"tsx"},e[23].value),(0,n.tZ)(i.Z,{lang:"tsx"},e[24].value),(0,n.tZ)("h2",{id:"api"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"app"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#app",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"App"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[25].value),(0,n.tZ)("th",null,e[26].value),(0,n.tZ)("th",null,e[27].value),(0,n.tZ)("th",null,e[28].value),(0,n.tZ)("th",null,e[29].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,(0,n.tZ)(_.Z,{to:"/components/message-cn/#messageconfig",sourceType:"Link"},e[32].value)),(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,e[34].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[35].value),(0,n.tZ)("td",null,e[36].value),(0,n.tZ)("td",null,(0,n.tZ)(_.Z,{to:"/components/notification-cn/#notificationconfig",sourceType:"Link"},e[37].value)),(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null,e[39].value)))),(0,n.tZ)("h2",{id:"design-token"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,n.tZ)(s.Z,{component:"App"})))}a.default=d}}]);
