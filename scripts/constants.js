module.exports = (function () {

    return {
        DEFAULT_VALUE_NAME: 'Value',

        CANVAS_WIDTH: 300,
        CANVAS_HEIGHT: 201,

        // game1 constants        
        GAME1_BOARD_TOP_LEFT_POINT_X: 50,
        GAME1_BOARD_TOP_LEFT_POINT_Y: 100,
        GAME1_BOARD_WIDTH: 200,
        GAME1_BOARD_HEIGHT: 10,
        GAME1_BOARD_FILL: 'black',
        GAME1_BOARD_STROKE: 'none',
        GAME1_BOARD_STROKE_WIDTH: 1,

        GAME1_BALL_START_X: 150,
        GAME1_BALL_START_Y: 90,
        GAME1_BALL_RADIUS: 10,
        GAME1_BALL_FILL: 'red',
        GAME1_BALL_STROKE: 'none',
        GAME1_BALL_STROKE_WIDTH: 1,
        GAME1_BALL_STEP: 1.5,
        GAME1_BALL_MIN_X: 50,
        GAME1_BALL_MAX_X: 250,

        GAME1_INITIAL_ROTATION_ANGLE: 0,
        GAME1_ROTATION_ANGLE_STEP: 0.02,
        GAME1_ROTATION_ANGLE_STEP_WHEN_PRESSED: 0.05,
        GAME1_ROT_ANGLE_STEP_MODIFIER: 100,
        GAME1_ROT_ANGLE_STEP_MODIFIER_WHEN_PRESSED: 2000,

        // game2 constants:
        GAME2_PLAYER_TOP_LEFT_POINT_X: 145,
        GAME2_PLAYER_TOP_LEFT_POINT_Y: 90,
        GAME2_PLAYER_WIDTH: 10,
        GAME2_PLAYER_HEIGHT: 20,
        GAME2_PLAYER_MIN_Y: 50,
        GAME2_PLAYER_MAX_Y: 130,
        GAME2_PLAYER_STEP: 20,
        GAME2_PLAYER_FILL: 'blue',
        GAME2_PLAYER_STROKE: 'black',
        GAME2_PLAYER_STROKE_WIDTH: 2,

        GAME2_RP_OBSTACLE_START_POINT_A_X: -20,
        GAME2_RP_OBSTACLE_START_POINT_A_Y: 50,
        GAME2_RP_OBSTACLE_START_POINT_B_X: -20,
        GAME2_RP_OBSTACLE_START_POINT_B_Y: 60,
        GAME2_RP_OBSTACLE_START_POINT_C_X: -5,
        GAME2_RP_OBSTACLE_START_POINT_C_Y: 55,
        GAME2_OBSTACLES_STEP: 2,
        GAME2_RP_OBSTACLE_FILL: 'black',
        GAME2_RP_OBSTACLE_STROKE: 'none',
        GAME2_RP_OBSTACLE_STROKE_WIDTH: 1,
        GAME2_LP_OBSTACLE_START_POINT_A_X: 320,
        GAME2_LP_OBSTACLE_START_POINT_A_Y: 90,
        GAME2_LP_OBSTACLE_START_POINT_B_X: 320,
        GAME2_LP_OBSTACLE_START_POINT_B_Y: 100,
        GAME2_LP_OBSTACLE_START_POINT_C_X: 305,
        GAME2_LP_OBSTACLE_START_POINT_C_Y: 95,
        GAME2_LP_OBSTACLE_FILL: 'black',
        GAME2_LP_OBSTACLE_STROKE: 'none',
        GAME2_LP_OBSTACLE_STROKE_WIDTH: 1,
        GAME2_POINT_TO_RESET_RP_OBSTACLE_X: 200,
        GAME2_POINT_TO_RESET_LP_OBSTACLE_X: 120,

        GAME2_BACKGROUND_TOP_LEFT_X: 145,
        GAME2_BACKGROUND_TOP_LEFT_Y: 50,
        GAME2_BACKGROUND_RECTS_WIDTH: 10,
        GAME2_BACKGROUND_RECTS_HEIGHT: 20,
        GAME2_BACKGROUND_RECTS_COUNT: 5,
        GAME2_BACKGROUND_RECTS_FILL: 'none',
        GAME2_BACKGROUND_RECTS_STROKE: 'black',
        GAME2_BACKGROUND_RECTS_STROKE_WIDTH: 2,

        // game3 constants:        
        GAME3_PLAYER_TOP_LEFT_POINT_X: 50,
        GAME3_PLAYER_TOP_LEFT_POINT_Y: 180,
        GAME3_PLAYER_BOTTOM_LEFT_POINT_X: 50,
        GAME3_PLAYER_BOTTOM_LEFT_POINT_Y: 200,
        GAME3_PLAYER_RIGHT_POINT_X: 65,
        GAME3_PLAYER_RIGHT_POINT_Y: 190,
        GAME3_PLAYER_MIN_Y: 0,
        GAME3_PLAYER_MAX_Y: 180,
        GAME3_PLAYER_STEP: 2,
        GAME3_PLAYER_FILL: 'azure',
        GAME3_PLAYER_STROKE: 'purple',
        GAME3_PLAYER_STROKE_WIDTH: 2,

        GAME3_OBSTACLE_START_POINT_X: 300,
        GAME3_POINT_TO_RELEASE_NEW_OBSTACLE_X: 140,
        GAME3_POINT_TO_REMOVE_OBSTACLE_X: 0,
        GAME3_OBSTACLE_WIDTH: 15,
        GAME3_OBSTACLE_HEIGHT: 50,
        GAME3_OBSTACLE_MAX_Y: 150,
        GAME3_OBSTACLE_STEP: 2,
        GAME3_OBSTACLE_FILL: 'black',
        GAME3_OBSTACLE_STROKE: 'none',
        GAME3_OBSTACLE_STROKE_WIDTH: 1,
        
        // game4 constants:
        GAME4_PLAYER_TOP_LEFT_POINT_X: 150,
        GAME4_PLAYER_TOP_LEFT_POINT_Y: 100,
        GAME4_PLAYER_WIDTH: 30,
        GAME4_PLAYER_HEIGHT: 30,
        GAME4_PLAYER_MIN_X: 0,
        GAME4_PLAYER_MAX_X: 270,
        GAME4_PLAYER_MIN_Y: 0,
        GAME4_PLAYER_MAX_Y: 170,
        GAME4_PLAYER_STEP: 3,
        GAME4_PLAYER_FILL: 'green',
        GAME4_PLAYER_STROKE: 'none',
        GAME4_PLAYER_STROKE_WIDTH: 1,

        GAME4_OBSTACLE_CREATION_INTERVAL: 4000,
        GAME4_OBSTACLE_WIDTH: 40,
        GAME4_OBSTACLE_HEIGHT: 40,
        GAME4_OBSTACLE_MAX_X: 260,
        GAME4_OBSTACLE_MAX_Y: 160,
        GAME4_OBSTACLE_COUNTER_START_VALUE: 10,
        GAME4_OBSTACLE_COUNTER_STEP: 1000,
        GAME4_OBSTACLE_FILL: 'grey',
        GAME4_OBSTACLE_STROKE: 'none',
        GAME4_OBSTACLE_STROKE_WIDTH: 1,
    };
}());