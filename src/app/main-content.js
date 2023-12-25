import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import Adw from 'gi://Adw';

export const MainContent = GObject.registerClass({
    GTypeName: 'MainContent',
    Template: 'resource:///dev/n3shemmy3/Kutamba/ui/main-content.ui',
    InternalChildren: ['HeaderBar', 'label'],
}, class MainContent extends Gtk.Box {
    constructor(application) {
        super({ application });
    }
});