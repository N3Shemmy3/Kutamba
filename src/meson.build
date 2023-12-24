pkgdatadir = join_paths(get_option('datadir'), meson.project_name())
gnome = import('gnome')

src_res = gnome.compile_resources('dev.n3shemmy3.Kutamba.src',
  'dev.n3shemmy3.Kutamba.src.gresource.xml',
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

data_res = gnome.compile_resources('dev.n3shemmy3.Kutamba.data',
  'dev.n3shemmy3.Kutamba.data.gresource.xml',
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

bin_conf = configuration_data()
bin_conf.set('GJS', find_program('gjs').full_path())
bin_conf.set('PACKAGE_VERSION', meson.project_version())
bin_conf.set('PACKAGE_NAME', meson.project_name())
bin_conf.set('prefix', get_option('prefix'))
bin_conf.set('libdir', join_paths(get_option('prefix'), get_option('libdir')))
bin_conf.set('datadir', join_paths(get_option('prefix'), get_option('datadir')))
bin_conf.set('resource_path', '/dev/n3shemmy3/Kutamba')

configure_file(
  input: 'dev.n3shemmy3.Kutamba.in',
  output: 'dev.n3shemmy3.Kutamba',
  configuration: bin_conf,
  install: true,
  install_dir: get_option('bindir')
)
