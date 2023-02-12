import java.util.Scanner;

public class TDEEcalc {
    public static void UserInfoCalc() {
        Scanner scan = new Scanner(System.in);
        System.out.println("性別を入力してください（「男性」または「女性」と入力してください）：");
        String gender = scan.nextLine();
        System.out.println("年齢を入力してください（半角数字で入力してください）：");
        int age = scan.nextInt();
        System.out.println("身長を入力してください（メートル単位で入力してください 例:160cmなら1.60と入力）：");
        double height = scan.nextDouble();
        System.out.println("体重を入力してください（キログラムで入力してください）：");
        double weight = scan.nextDouble();
        System.out.println("運動量を入力してください（1: ほぼ運動しない、2: 週に1~3回程度の軽い運動、3: 週に3~5回程度の普通の運動、4: 週に6~7回程度の強い運動、5: アスリートまたは強い運動を常に行う仕事）：");
        int activityLevel = scan.nextInt();
        scan.close();
        
        double BMR;
        if (gender.equals("男性")) {
            BMR = 66.5 + (13.75 * weight) + (5.003 * height * 100) - (6.755 * age);
        } else {
            BMR = 655.1 + (9.563 * weight) + (1.850 * height * 100) - (4.676 * age);
        }
        
        public static double TDEE;
        switch (activityLevel) {
            case 1:
                TDEE = BMR * 1.2;
                break;
            case 2:
                TDEE = BMR * 1.375;
                break;
            case 3:
                TDEE = BMR * 1.55;
                break;
            case 4:
                TDEE = BMR * 1.725;
                break;
            case 5:
                TDEE = BMR * 1.9;
                break;
            default:
                TDEE = BMR;
                break;
        }
        System.out.println("あなたの1日の基礎代謝量は " + BMR + " kcalです");
        System.out.println("あなたの1日の活動代謝量は " + TDEE + " kcalです");
    }
}