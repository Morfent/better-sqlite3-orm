sqlite3-boilerplate - a utility API for better-sqlite3
======================================================

There are ORM packages around for node-sqlite3, but I generally prefer
better-sqlite3, which is lacking them. When it comes to either package, certain
tasks like migrating databases between different schemas can be very tedious in
large projects. This aims to abstract some of that away from developers to
alleviate some of the repetitive coding otherwise required when working with
databases in this package.

Installing
----------

If you are running macOS or any other flavour of BSD, you will need to install
gcc49 and symlink g++49 to /usr/local/bin/g++ in order to install
better-sqlite3. If you have a later version installed that's already symlinked
to there, you can edit ./node_modules/lzz-gyp/lzz-source/Makefile.release and
change the CC setting to gcc49 to install instead.

TODO
----

- Write the @types type declaration package for better-sqlite3 to allow
  giving variables/functions related to databases their proper types.
- Write the actual API
