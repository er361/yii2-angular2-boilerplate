<?php
/**
 * Created by PhpStorm.
 * User: Nazira
 * Date: 30.06.2017
 * Time: 11:55
 */

namespace app\modules\v1\controllers;


use yii\rest\ActiveController;

class ProjectsController extends ActiveController
{
    public $modelClass = 'app\models\Projects';
    public function behaviors()
    {
        $behaviors =  parent::behaviors(); // TODO: Change the autogenerated stub
        // add CORS filter
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                'Origin' => ['*']
            ]
        ];
        return $behaviors;
    }

    public function actionImages(){
        echo 'array of imags';
    }
}