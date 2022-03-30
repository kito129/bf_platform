import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'layout',
    link: '/dashboard'
  },
  /*
  {
    label: 'Market Basic',
    icon: 'layers',
    link: '/markets/list'
  },
  {
    label: 'Market Advanced',
    icon: 'slack',
    link: '/marketAdvanced/list'
  },
  */
  {
    label: 'Market Basic',
    icon: 'layers',
    link: '/markets/metalist'
  },
  {
    label: 'Market Advanced',
    icon: 'slack',
    link: '/marketAdvanced/metalist'
  },
  {
    label: 'Live',
    icon: 'play',
    link: '/live'
  },
  {
    label: 'Runners',
    icon: 'users',
    link: '/runners'
  },
  {
    label: 'Notes',
    icon: 'file-text',
    link: '/notes'
  },
  {
    label: 'Tennis Tournaments',
    icon: 'disc',
    link: '/tennisTournament'
  },
  {
    label: 'Calculator',
    icon: 'percent',
    link: '/calculator'
  },
  {
    label: 'Report',
    icon: 'bar-chart-2',
    link: '/report'
  },
  {
    label: 'Study',
    icon: 'layers',
    link: '/study'
  },
  {
    label: 'Db Manager',
    icon: 'database',
    link: '/dbManager'
  },
];
