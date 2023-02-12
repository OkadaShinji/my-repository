import java.util.Scanner;

public class PFCBalance {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);

    
    final double PROTEIN_RATIO = 0.3;
    final double CARBOHYDRATE_RATIO = 0.5;
    final double FAT_RATIO = 0.2;

    System.out.print("目標体重（kg）を入力してください：");
    double targetWeight = scan.nextDouble();

    System.out.print("現在の体重（kg）を入力してください：");
    double currentWeight = scan.nextDouble();

    System.out.print("期間（日数）を入力してください：");
    int days = scan.nextInt();

    double weightLossGoalPerDay = (currentWeight - targetWeight) / days;
    double calorieLossGoalPerDay = weightLossGoalPerDay * 7700;
    double totalCaloriePerDay = TDEE - calorieLossGoalPerDay;

    double proteinIntakePerDay = totalCaloriePerDay * PROTEIN_RATIO / 4;
    double carbohydrateIntakePerDay = totalCaloriePerDay * CARBOHYDRATE_RATIO / 4;
    double fatIntakePerDay = totalCaloriePerDay * FAT_RATIO / 9;

    System.out.println("1日あたりの推奨タンパク質は" + proteinIntakePerDay + "gです");
    System.out.println("1日あたりの推奨炭水化物は" + carbohydrateIntakePerDay + "gです");
    System.out.println("1日あたりの推奨脂質は" + fatIntakePerDay + "gです");
  }
}