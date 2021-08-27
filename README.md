# AMI para Asterisk - NodeJS

# Habilitar usuário admin no Manager Asterisk

/etc/asterisk/manager.conf
enabled = yes
bindaddr = 0.0.0.0

[admin]
secret=admin
deny=0.0.0.0/0.0.0.0
permit=192.168.0.0/255.255.0.0
read=system,call,log,verbose,agent,user,config,dtmf,reporting,cdr,dialplan
write=system,call,agent,user,config,command,reporting,originate,message

# Criar db mysql
mysql -u root -p
CREATE DATABASE asteriskmanager;

# Permitir acesso remoto ao mysql
/etc/mysql/mysql.conf.d/mysqld.cnf
bind-address = 127.0.0.1 -> 0.0.0.0
