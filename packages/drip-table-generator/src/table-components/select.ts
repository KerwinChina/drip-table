import { DripTableComponentAttrConfig } from '../typing';
import { basicColumnAttrComponents } from './configs';

export default {
  $id: '$display_select',
  'ui:type': 'select',
  type: 'string',
  group: '基础组件',
  fieldKey: 'select_qywxDIIO',
  title: '选择组件',
  paramName: '',
  default: '',
  attrSchema: [
    ...basicColumnAttrComponents('选择器'),
    {
      name: 'options.allowClear',
      group: '组件属性',
      'ui:title': '允许清空值',
      'ui:type': 'switch',
      'ui:props': {},
      type: 'boolean',
    },
    {
      name: 'options.bordered',
      group: '组件属性',
      'ui:title': '允许展示边框',
      'ui:type': 'switch',
      'ui:props': {},
      type: 'boolean',
    },
    {
      name: 'options.showSearch',
      group: '组件属性',
      'ui:title': '允许搜索',
      'ui:type': 'switch',
      'ui:props': {},
      type: 'boolean',
    },
    {
      name: 'options.mode',
      group: '组件属性',
      'ui:title': '选中模式',
      'ui:type': 'radio',
      'ui:props': {
        options: [
          { label: '单选模式', value: void 0 },
          { label: '多选模式', value: 'multiple' },
          { label: '标签模式', value: 'tags' },
        ],
      },
      type: 'string',
    },
    {
      name: 'options.placement',
      group: '组件属性',
      'ui:title': '弹出位置',
      'ui:type': 'radio',
      'ui:props': {
        options: [
          { label: '左下', value: 'bottomLeft' },
          { label: '右下', value: 'bottomRight' },
          { label: '左上', value: 'topLeft' },
          { label: '右上', value: 'topRight' },
        ],
      },
      type: 'string',
      default: 'bottomLeft',
    },
    {
      name: 'options.size',
      group: '组件属性',
      'ui:title': '选中模式',
      'ui:type': 'radio',
      'ui:props': {
        options: [
          { label: '大', value: 'large' },
          { label: '中', value: 'middle' },
          { label: '小', value: 'small' },
        ],
      },
      type: 'string',
      default: 'middle',
    },
    {
      name: 'options.placeholder',
      group: '组件属性',
      'ui:title': '暗纹提示文案',
      'ui:type': 'text',
      default: '',
    },
    {
      name: 'options.disabled',
      group: '组件属性',
      'ui:title': '禁用组件条件',
      'ui:type': 'text',
      'ui:description': {
        title: '可以直接填写 true/false 或者代码片段，参数为rec',
        trigger: 'hover',
        type: 'icon',
      },
    },
    {
      name: 'options.options',
      group: '组件属性',
      'ui:title': '自定义下拉菜单',
      'ui:type': 'array-list',
      default: [],
      'ui:props': {
        items: [
          {
            name: 'label',
            'ui:title': '文案',
            'ui:type': 'input',
            type: 'string',
            default: '',
          },
          {
            name: 'value',
            'ui:title': '值',
            'ui:type': 'input',
            type: 'string',
            default: '',
          },
          {
            name: 'disabled',
            group: '组件属性',
            'ui:title': '禁用条件',
            'ui:type': 'text',
            'ui:description': {
              title: '可以直接填写 true/false 或者代码片段，参数为rec',
              trigger: 'hover',
              type: 'icon',
            },
          },
        ],
      },
    },
  ],
  icon: '<svg t="1660211801499" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3328" width="48" height="48"><path d="M960 128H64a32 32 0 0 0-32 32v416a32 32 0 0 0 32 32h896a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32z m-32 416H96V192h832v352zM896 647.264a32 32 0 0 0-32 32V832H160v-152.736a32 32 0 1 0-64 0V864a32 32 0 0 0 32 32h768a32 32 0 0 0 32-32v-184.736a32 32 0 0 0-32-32z" p-id="3329"></path><path d="M685.92 470.368a31.904 31.904 0 0 0 45.728 0l123.232-126.016a31.968 31.968 0 1 0-45.76-44.736l-100.352 102.624-100.384-102.624a32 32 0 0 0-45.76 44.736l123.296 126.016z" p-id="3330"></path></svg>',
} as DripTableComponentAttrConfig;
