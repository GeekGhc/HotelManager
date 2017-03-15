<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/3/7
 * Time: 上午10:48
 */
error_reporting(E_ALL ^ E_NOTICE);
class Db {
    static private $_instance;
    static private $_connectSource;
    static  private  $statement;
    static  private $queryStr;
    private $_dbConfig = array(
        'host' => '127.0.0.1',
        'user' => 'root',
        'password' => 'ghc12345678',
        'database' => 'hotel',
    );

    private function __construct() {
    }

    static public function getInstance() {
        if(!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function connect() {
        if(!self::$_connectSource) {
            self::$_connectSource = mysqli_connect($this->_dbConfig['host'], $this->_dbConfig['user'], $this->_dbConfig['password'],$this->_dbConfig['database']);

            if(!self::$_connectSource) {
                throw new Exception('mysql connect error');
            }
            self::$_connectSource->query("set names UTF8");
        }
        return self::$_connectSource;
    }

    public static function getNum($sql)
    {
        return self::query($sql)->num_rows;
    }
    public static function mutile_query($sql)
    {
        return self::mutile_query($sql);
    }

    public  static  function free(){
        self::$statement=null;
    }

    public static function insert($sql)
    {
        if(!($result=self::query($sql)))
        {
            throw new Exception('插入失败');
        }
        else{
            return 0;
        }
    }

    public static function delete($sql)
    {
        if (!($result = self::query($sql))) {
            throw new Exception('删除失败');
        } else {
            return 0;
        }
    }

    public static  function  fetch($sql){
        if(!($result=self::query($sql)))
        {
            throw new Exception('插入失败');
        }
        else{
            return $result->fetch_array();
        }
    }

    public static function assoc($sql){
        $result= self::query($sql);
        $rows=array();
        if($result)
        {
            while($row=$result->fetch_assoc())
            {
                $rows[]=$row;
            }
        }
        return $rows;
    }

    public static function query($sql)
    {
        if(!empty(self::$statement))
        {
            self::free();
        }
        self::$queryStr=$sql;
        self::$statement= self::$_connectSource->query(self::$queryStr);
        return self::$statement;
    }
}



