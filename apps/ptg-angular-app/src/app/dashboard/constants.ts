/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @used Used for navigation config
**/

export const NavigationData = [
  {
    id:"1",
    path: '/accordian-example',
    // icon: 'home-icon',
    icon: 'fa-solid fa-chevron-down',
    label: 'ACCORDIAN',
    disabled: false,
  },
  {
    id:"2",
    path: '/calendar',
    // icon: 'home-icon',
    icon: 'fa-solid fa-calendar',
    label: 'CALENDER',
    disabled: false,
  },

  // Charts routing
  {
    id:"3",
    label: 'CHARTS',
    icon: 'fas fa-chart-line',
    pages: [
      {
        label!: 'D3_CHARTS',
        path: '/charts/d3-charts',
        id: 'd3-chart',
        disabled: false,
        parentId:"3"
      },
      {
        label!: 'HIGH_CHARTS',
        path: '/charts/high-charts',
        id: 'high-chart',
        disabled: false,
        parentId:"3"
      }
    ],
  },
  // Datatable routing
  {
    id:"4",
    label: 'DATA_TABLE',
    icon: 'far fa-star',
    pages: [
      {
        label!: 'AG_GRID',
        path: '/datatable/ag-grid',
        id: 'ag-grid',
        disabled: false,
        parentId:"4"
      },
      {
        label!: 'NGX_DATATABLE',
        path: '/datatable/ngx-datatable',
        id: 'ngx-table',
        disabled: false,
        parentId:"4"
      },
      {
        label!: 'MATERIAL',
        path: '/datatable/material-datatable',
        id: 'material',
        disabled:false,
        parentId:"4"
      },
    ],
  },
  {
    id:"5",
    path: '/dialog',
    icon: 'fas fa-grip-vertical',
    label: 'DIALOG',
    disabled: false,
  },
  {
    id:"6",
    path: '/draganddrop',
    icon: 'fas fa-grip-vertical',
    label: 'DRAG_AND_DROP',
    disabled: false,
  },
  {
    id:"7",
    path: '/download',
    icon: 'fas fa-download',
    label: 'DOWNLOAD',
    disabled: false,
  },
  {
    id:"8",
    path: '/grid-layout',
    icon: 'fa-solid fa-border-all',
    label: 'GRID_LAYOUT',
    disabled: false,
  },
  {
    id:"9",
    path: '/indeterminate-checkbox',
    icon: 'fas fa-square-check',
    label: 'INDETERMINATE',
    disabled: false,
  },
  {
    id:"10",
    path: '/pipes',
    icon: 'fa-solid fa-p',
    label: 'PIPES',
    disabled: false,
  },
  {
    id:"11",
    path: '/role',
    icon: 'fas fa-lock',
    label: 'ROLE_BASED',
    disabled: false,
  },
  {
    id:"12",
    path: '/select',
    // icon: 'home-icon',
    icon: 'fa-solid fa-check-to-slot',
    label: 'SELECT',
    disabled: false,
  },
  {
    id:"13",
    path: '/accessibility',
    // icon: 'home-icon',
    icon: 'fa-solid fa-keyboard',
    label: 'WEB_ACCESSIBILITY',
    disabled: false,
  },
  {
    id:"14",
    path: '/multistep-form',
    // icon: 'home-icon',
    icon: 'fa-solid fa-file',
    label: 'MULTI_FORMS',
    disabled: false,
  },
  {
    id:"15",
    path: '/tooltip',
    icon: 'fas fa-grip-vertical',
    label: 'TOOLTIP',
    disabled: false,
  },
];
