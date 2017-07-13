better-sqlite3-orm - An ORM library for better-sqlite3
======================================================

There are some ORM libraries out there compatible with node-sqlite3, but I much
prefer better-sqlite3 in comparison. The only problem is writing large projects
with the package is a hassle without any libraries to abstract common
operations on databases and tables that would need to be handled either through
writing raw SQL queries each time you wish to do anything with your databases,
or through rolling your own abstractions. This aims to abstract common
operations on databases in such a way that you don't need to worry about
needing to write SQL queries for every single operation, though the option to
do so will still be available for complex operations.

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
