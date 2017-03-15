<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/3/15
 * Time: 上午11:47
 */

class Response
{
    const JSON = "json";

    public static function show($code, $message = '', $data = array(), $type = self::JSON)
    {
        if (!is_numeric($code)) {
            return '';
        }

        $type = isset($_GET['format']) ? $_GET['format'] : self::JSON;

        $result = array(
            'code' => $code,
            'message' => $message,
            'data' => $data,
        );

        if ($type == 'json') {
            self::json($code, $message, $data);
            exit;
        } else if ($type == 'array') {
            var_dump($result);
        }
    }


    public static function json($code, $message = '', $data = array())
    {

        if (!is_numeric($code)) {
            return '';
        }

        $result = array(
            'code' => $code,
            'message' => $message,
            'data' => $data
        );

        echo json_encode($result);
        exit;
    }
}